import React from 'react';
import Header from '../../components/Header';
import Info from './subpage/info';
import Comment from "./subpage/comment";

class Detail extends React.Component {
    render() {
        //获取商户ID
        var id = this.props.params.id;
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Comment id={id}/>
            </div>
        );
    }
}
export default Detail;