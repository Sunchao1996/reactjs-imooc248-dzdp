import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userinfoActions from '../actions/userinfo'
import A from '../components/A'
import B from '../components/B'
import C from '../components/C'
class Hello extends React.Component{
    render(){
        return (<div>
            <p>Hello world!</p>
            <A userinfo={this.props.userinfo}></A>
            <B userinfo={this.props.userinfo}></B>
            <C userinfoChange={this.props.userinfoActions}></C>
        </div>);
    }
    componentDidMount(){
        this.props.userinfoActions.login({
            text:"aaa",
            city:"beijing"
        });
    }
}

function mapStateToProps(state){
    console.log("111",state.userinfo)
    return {
        userinfo:state.userinfo
    };
}
function mapDispatchToProps(dispatch){
    return {
        userinfoActions:bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);