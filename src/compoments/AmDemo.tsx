import React, { useEffect, useRef, useState } from 'react';
import Avatar from 'antd/lib/avatar';
import Engine, { EngineInterface } from '@aomao/engine';
import Codeblock, { CodeBlockComponent } from '@aomao/plugin-codeblock';
import Toolbar, { ToolbarPlugin, ToolbarComponent } from '@aomao/toolbar';
import OTClient from '../utils/ot-client';
import 'antd/lib/avatar/style';
import './engine.less';

const plugins = [
	Codeblock,
	ToolbarPlugin,
];
const cards = [
	CodeBlockComponent,
	ToolbarComponent,
];

const isDev = process.env.NODE_ENV !== 'production';
const domain = isDev ? 'localhost:7001' : 'riwang.love:7001';

const EngineDemo = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [engine, setEngine] = useState<EngineInterface>();
	const [content, setContent] = useState<string>(
		`<p data-id="daab65504017af77a36594f98ab4875d">Hello<strong>AoMao</strong></p><card type="block" name="hr" value="data:%7B%22id%22%3A%22eIxTM%22%7D"></card>`,
	);
	const [members, setMembers] = useState([]);

	useEffect(() => {
		if (!ref.current) return;
		//实例化引擎
		const engine = new Engine(ref.current, {
			plugins,
			cards,
			config: {},
		});
		//初始化本地协作，用作记录历史
		engine.ot.initLockMode();

		//设置编辑器值
		engine.setValue(content);
		//监听编辑器值改变事件
		engine.on('change', value => {
			setContent(value);
			console.log('value', value);
			console.log('html:', engine.getHtml());
		});
		//获取当前保存的用户信息
		const memberData = localStorage.getItem('member');
		const currentMember = !!memberData ? JSON.parse(memberData) : null;
		//实例化协作编辑客户端
		const otClient = new OTClient(engine);
		//连接到协作服务端，demo文档
		const ws = `ws://${domain}`;
		otClient.connect(
			`${ws}${currentMember ? '?uid=' + currentMember.id : ''}`,
			'demo',
		);
		otClient.on('ready', member => {
			//保存当前会员信息
			if (member) localStorage.setItem('member', JSON.stringify(member));
		});
		//用户加入或退出改变
		otClient.on('membersChange', members => {
			setMembers(members);
		});
		setEngine(engine);
	}, []);

	return (
		<>
			<div className="editor-ot-users">
				<p style={{ color: '#888888' }}>
					当前在线用户：<strong>{members.length}</strong> 人
				</p>
				<div className="editor-ot-users-content">
					{members.map(member => {
						return (
							<Avatar
								key={member['id']}
								size={30}
								style={{ backgroundColor: member['color'] }}
							>
								{member['name']}
							</Avatar>
						);
					})}
				</div>
			</div>
			{engine && (
				<Toolbar
					engine={engine}
					items={[
						['collapse'],
						['undo', 'redo', 'paintformat', 'removeformat'],
						['heading', 'fontsize'],
						[
							'bold',
							'italic',
							'strikethrough',
							'underline',
							'moremark',
						],
						['fontcolor', 'backcolor'],
						['alignment'],
						['unorderedlist', 'orderedlist', 'tasklist', 'indent'],
						['link', 'quote', 'hr'],
					]}
				/>
			)}
			<div className="editor-wrapper">
				<div className="editor-container">
					<div ref={ref} />
				</div>
			</div>
		</>
	);
};

export default EngineDemo;
