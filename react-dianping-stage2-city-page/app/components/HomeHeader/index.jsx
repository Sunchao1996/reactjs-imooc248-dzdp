import React from 'react';
import './style.less'
import {Link} from 'react-router';
class HomeHeader extends React.Component {
    render() {
        return (
            /*clear-fix 重点*/
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city" style={{textDecoration:'none'}}>
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeHeader;