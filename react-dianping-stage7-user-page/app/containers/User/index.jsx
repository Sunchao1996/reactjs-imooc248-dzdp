import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import OrderList from './subpage/orderlist';

class User extends React.Component {
    render() {
        return (
            <div>
                <Header title="用户主页" backRouter="/"/>
                <UserInfo userinfo={this.props.userinfo}/>
                <OrderList/>
            </div>
        );
    }

    componentDidMount() {
        //不登录的话返回登录页
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(User);