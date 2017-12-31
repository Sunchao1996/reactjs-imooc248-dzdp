import React from 'react';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checking: true,
        }
    }

    render() {
        return (
            <div>
                <Header title="登录"/>
                {this.state.checking ?
                    <div>{/*等待中*/}</div> :
                    <LoginComponent loginHandle={this.loginHandle.bind(this)}/>}
            </div>
        );
    }

    componentDidMount() {
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            //已经登录
            this.goUserPage();
        } else {
            //没有登录
            this.setState({
                checking:false,
            });
        }
    }

    goUserPage() {
        hashHistory.push('/User');
    }
    //登录成功之后的处理
    loginHandle(username){
        const actions = this.props.userInfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.update(userinfo);

        //跳转链接
        const params = this.props.params;
        const router = params.router;
        if(router){
            hashHistory.push(router);
        }else{
            this.goUserPage();
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);