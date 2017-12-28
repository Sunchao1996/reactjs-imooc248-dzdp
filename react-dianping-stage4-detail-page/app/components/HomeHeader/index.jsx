import React from 'react';
import './style.less'
import {Link, hashHistory} from 'react-router';
import SearchInput from '../SearchInput';
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            kwd: ''
        }
    }

    render() {
        return (
            /*clear-fix 重点*/
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city" style={{textDecoration: 'none'}}>
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
                        <SearchInput
                               value=''
                               entryHandle={this.entryHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
    entryHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}
export default HomeHeader;