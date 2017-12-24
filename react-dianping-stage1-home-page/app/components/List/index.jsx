import React from 'react';
import './style.less';
import Item from './item'
class List extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="list-container">
                {
                    data.map(function (item, index) {
                        return <Item key={index} data={item}/>
                    })
                }
            </div>
        );
    }
}
export default List;