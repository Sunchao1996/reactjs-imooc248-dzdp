import React from 'react';
import {getOrderListData, postComment} from '../../../fetch/user/orderlist';
import './style.less';
import OrderListComponent from '../../../components/OrderList';

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                <OrderListComponent submitComment={this.submitComment.bind(this)} data={this.state.data}/>
            </div>
        );
    }

    submitComment(id, value, callback) {
        const result = postComment(id, value);
        result.then(res => {
            return res.json();
        }).then(json => {
            if (json.errno === 0) {
                //没有发生错误，提交评价
                callback();
            }
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        const username = this.props.userinfo.username;
        const result = getOrderListData(username);
        const _this = this;
        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json;
            _this.setState({
                data: data
            });
        }).catch(err => {
            console.log(err);
        })
    }

}
export default OrderList;