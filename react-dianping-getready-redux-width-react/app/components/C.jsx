import React from 'react';

class C extends React.Component{
    render(){
        return (<p onClick={this.clickHandler.bind(this)}>修改</p>)
    }
    clickHandler(){
        this.props.userinfoChange.login({
            text:"bbb",
            city:"nanjing"
        })
    }
}
export default C;