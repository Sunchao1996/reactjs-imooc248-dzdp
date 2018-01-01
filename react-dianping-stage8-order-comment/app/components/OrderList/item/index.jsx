import React from 'react';
import './style.less';

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        /*  未评价：用户还没有评价，此时应该显示“评价”按钮，点击之后可以评价
         评价中：用户点击了“评价”按钮，还未写完评价内容。此时“评价”按钮应该暂时隐藏掉
         已评价：用户已经评价完成并提交了，此时应该显示“已评价”，并且不可点击*/
        this.state = {
            commentState: 2
        }
    }

    render() {
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img}/>
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0
                            ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                            : this.state.commentState === 1
                            ? '' : <button className="btn unseleted-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：{data.price}</span>
                </div>
                {/*评价中显示的输入框*/}
                {

                    this.state.commentState === 1
                        ?
                        <div className="comment-text-container">
                            <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref={e => this.commentEl = e }></textarea>
                            <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                            <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                        : ''
                }
            </div>
        );
    }

    submitComment() {
        const value = this.commentEl.value.trim();
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        if (!value) {
            return;
        }
        submitComment(id, value, this.commentOk.bind(this));
    }

    commentOk() {
        this.setState({
            commentState: 2
        })
    }

    showComment() {
        this.setState({
            commentState: 1
        });
    }

    hideComment() {
        this.setState({
            commentState: 0
        });
    }

    componentDidMount() {
        const data = this.props.data;
        this.setState({
            commentState: data.commentState
        });
    }
}
export default Item;