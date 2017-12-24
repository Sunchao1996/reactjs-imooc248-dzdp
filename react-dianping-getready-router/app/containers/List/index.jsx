import React from 'react';
import {hashHistory} from 'react-router';
class List extends React.Component {
    clickHandler(value){
        hashHistory.push('/detail/'+value);
    }
    render() {
        var arr = [1, 2, 3];
        return (
            <ul>
                {arr.map(function(item,index){
                    return <li key={index} onClick={this.clickHandler.bind(this,item)}>Item {item}</li>
                }.bind(this))}
            </ul>
        );
    }
}
export default List;