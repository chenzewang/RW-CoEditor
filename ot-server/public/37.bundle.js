(self.webpackChunkrw_editor=self.webpackChunkrw_editor||[]).push([[37],{37:function(e){!function(n){var t,r={},o={16:!1,18:!1,17:!1,91:!1},i="all",l={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},c={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},f=function(e){return c[e]||e.toUpperCase().charCodeAt(0)},u=[];for(t=1;t<20;t++)c["f"+t]=111+t;function a(e,n){for(var t=e.length;t--;)if(e[t]===n)return t;return-1}function s(e,n){if(e.length!=n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}var p={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function h(e){for(t in o)o[t]=e[p[t]]}function d(e,n,t){var o,i;o=v(e),void 0===t&&(t=n,n="all");for(var l=0;l<o.length;l++)i=[],(e=o[l].split("+")).length>1&&(i=y(e),e=[e[e.length-1]]),e=e[0],(e=f(e))in r||(r[e]=[]),r[e].push({shortcut:o[l],scope:n,method:t,key:o[l],mods:i})}for(t in l)d[t]=!1;function g(){return i||"all"}function v(e){var n;return""==(n=(e=e.replace(/\s/g,"")).split(","))[n.length-1]&&(n[n.length-2]+=","),n}function y(e){for(var n=e.slice(0,e.length-1),t=0;t<n.length;t++)n[t]=l[n[t]];return n}function k(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent&&e.attachEvent("on"+n,(function(){t(window.event)}))}k(document,"keydown",(function(e){!function(e){var n,t,i,c,f,s;if(n=e.keyCode,-1==a(u,n)&&u.push(n),93!=n&&224!=n||(n=91),n in o)for(i in o[n]=!0,l)l[i]==n&&(d[i]=!0);else if(h(e),d.filter.call(this,e)&&n in r)for(s=g(),c=0;c<r[n].length;c++)if((t=r[n][c]).scope==s||"all"==t.scope){for(i in f=t.mods.length>0,o)(!o[i]&&a(t.mods,+i)>-1||o[i]&&-1==a(t.mods,+i))&&(f=!1);(0!=t.mods.length||o[16]||o[18]||o[17]||o[91])&&!f||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}(e)})),k(document,"keyup",(function(e){var n,t=e.keyCode,r=a(u,t);if(r>=0&&u.splice(r,1),93!=t&&224!=t||(t=91),t in o)for(n in o[t]=!1,l)l[n]==t&&(d[n]=!1)})),k(window,"focus",(function(){for(t in o)o[t]=!1;for(t in l)d[t]=!1}));var m=n.key;n.key=d,n.key.setScope=function(e){i=e||"all"},n.key.getScope=g,n.key.deleteScope=function(e){var n,t,o;for(n in r)for(t=r[n],o=0;o<t.length;)t[o].scope===e?t.splice(o,1):o++},n.key.filter=function(e){var n=(e.target||e.srcElement).tagName;return!("INPUT"==n||"SELECT"==n||"TEXTAREA"==n)},n.key.isPressed=function(e){return"string"==typeof e&&(e=f(e)),-1!=a(u,e)},n.key.getPressedKeyCodes=function(){return u.slice(0)},n.key.noConflict=function(){var e=n.key;return n.key=m,e},n.key.unbind=function(e,n){var t,o,i,l,c,u=[];for(t=v(e),l=0;l<t.length;l++){if((o=t[l].split("+")).length>1&&(u=y(o),e=o[o.length-1]),e=f(e),void 0===n&&(n=g()),!r[e])return;for(i=0;i<r[e].length;i++)(c=r[e][i]).scope===n&&s(c.mods,u)&&(r[e][i]={})}},e.exports=d}(this)}}]);