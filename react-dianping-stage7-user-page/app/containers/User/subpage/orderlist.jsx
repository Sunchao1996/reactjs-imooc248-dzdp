import React from 'react';
import {getOrderListData} from '../../../fetch/user/orderlist';
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
                <OrderListComponent data={this.state.data}/>
            </div>
        );
    }

    componentDidMount() {
        const username = this.props.username;
        const result = getOrderListData(username);
        const _this = this;
        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json;
            _this.setState({
               data:data
            });
        }).catch(err => {
            console.log(err);
        })
    }

}
export default OrderList;