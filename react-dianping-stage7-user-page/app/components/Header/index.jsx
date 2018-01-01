import React from 'react';
import {hashHistory} from 'react-router';
import './style.less'

class Header extends React.Component {
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}><i className="icon-chevron-left"></i></span>
                <h1>
                    {this.props.title}
                </h1>
            </div>
        );
    }

    clickHandle() {
        //当用户处于用户主页的时候回退时回退到首页
        if(this.props.backRouter){
            hashHistory.push(this.props.backRouter);
            return ;
        }
        window.history.back();
    }
}
export default Header;