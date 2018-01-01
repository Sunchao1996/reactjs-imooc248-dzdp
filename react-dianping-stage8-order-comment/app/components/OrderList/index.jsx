import React from 'react';
import './style.less'
import Item from './item';

class OrderList extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                {
                    data.map(function(item,index){
                        return <Item submitComment={this.props.submitComment} key={index} data={item} />
                    }.bind(this))
                }
            </div>
        );
    }
}
export default OrderList;