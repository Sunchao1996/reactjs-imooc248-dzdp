import React from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

class Search extends React.Component {
    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.params.keyword}/>
                <SearchList keyword={this.props.params.keyword} category={this.props.params.type}/>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.params.type);
        console.log(this.props.params.keyword);

    }
}
export default Search;