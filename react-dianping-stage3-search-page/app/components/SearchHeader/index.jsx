import React from 'react';
import './style.less';
import SearchInput from '../SearchInput';
import {hashHistory} from 'react-router';
class SearchHeader extends React.Component {
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput value={this.props.keyword || ''} entryHandle={this.entryHandle.bind(this)}/>
                </div>
            </div>
        );
    }

    clickHandle() {
        window.history.back();
    }

    entryHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}
export default SearchHeader;