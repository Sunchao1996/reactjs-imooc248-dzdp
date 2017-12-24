import React from 'react';

class A extends React.Component{
    render(){
        console.log(this.props.userinfo)
        return (<p>{this.props.userinfo.text}</p>);
    }
}
export default A;