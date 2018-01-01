import React from 'react';
import './style.less'
import Item from './Item'
class CommentList extends React.Component {
    render() {
        const data = this.props.data;
        console.log("data",data)
        return (
            <div className="comment-list">
                {data.map(function (item, index) {
                    return <Item data={item} key={index}/>
                })}
            </div>
        );
    }
}
export default CommentList;