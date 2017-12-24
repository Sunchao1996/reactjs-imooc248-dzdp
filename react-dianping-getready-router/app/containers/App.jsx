import React from 'react';
/*母版页，会放一些公用的信息*/
class App extends React.Component {
    render() {
        return (<div>{this.props.children}</div>);
    }
}
export default App;