
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import AmDemo from "./compoments/AmDemo"
interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
      <AmDemo></AmDemo>
        
      </>
    );
  }
}

export default hot(App);
