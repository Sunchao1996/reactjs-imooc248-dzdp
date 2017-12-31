import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import BuyAndStore from '../../../components/BuyAndStore';
import {hashHistory} from 'react-router';
import * as StoreActionsFromFile from '../../../actions/store';

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isStore: false,
        };
    }

    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore}
                             buyHandle={this.buyHandle.bind(this)}
                             storeHandle={this.storeHandle.bind(this)}/>
            </div>
        );
    }

    componentDidMount() {
        //判断是否已经收藏
        this.checkStore();
    }

    checkStore() {
        const store = this.props.store;
        const id = this.props.id;
        store.some(function (item) {
            if (item.id === id) {
                this.setState({
                    isStore: true
                });
                return true;
            }
        }.bind(this))
    }

    //购买事件
    buyHandle() {
        //验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }
        //购买的流程

        //跳转到用户页面
        hashHistory.push('/User')
    }

    //收藏事件
    storeHandle() {
        //判断是否登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return ;
        }

        const store = this.props.store;
        const storeActions = this.props.storeActions;
        const id = this.props.id;
        //判断是已收藏还是未收藏
        if (this.state.isStore) {
            storeActions.rm({id: id});
        } else {
            storeActions.add({id: id})
        }

        //改变标志位状态
        this.setState({
            isStore: !this.state.isStore
        })
    }

    //验证的登录
    loginCheck() {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (!userinfo.username) {
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id));
            return false;
        }
        return true;
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(StoreActionsFromFile, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy);