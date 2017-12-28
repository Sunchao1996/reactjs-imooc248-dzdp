import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../../actions/userinfo'
import {getSearchData} from '../../../fetch/search/search';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

const initialState = {
    data: [],//存储列表信息
    hasMore: false,//记录当前状态下，还有没有更多的数据可供加载
    isLoadingMore: false,//记录当前状态下，是‘加载中。。。’还是‘点击加载更多’
    page: 1,//下一页的页码
};

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = initialState;

    }

    render() {
        return (
            <div>
                {
                    this.state.data.length ?
                        <ListComponent data={this.state.data}/> :
                        '加载中...'
                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/> :
                        <div></div>
                }
            </div>
        );
    }

    componentDidMount() {
        //获取首页数据
        this.loadFirstPageData();
    }

    //获取首屏数据
    loadFirstPageData() {
        const cityName = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword ? this.props.keyword : '';
        const result = getSearchData(0, cityName, this.props.category, this.props.keyword ? this.props.keyword : '');
        this.resultHandle(result);
    }

    //加载更多数据
    loadMoreData() {
        //记录状态
        this.setState({
            isLoadingMore: true,
        });

        //获取数据
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getSearchData(page, cityName, this.props.category, this.props.keyword);
        this.resultHandle(result);

        //增加page的数量
        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }

    //数据处理函数
    resultHandle(result) {
        result.then(res => {
            return res.json();
        }).then((json) => {
            const hasMore = json.hasMore;
            const data = json.data;
            /*this.setState({
             //存在问题，加载下一页数据时，不能保留上一页数据
             data: data,
             hasMore: hasMore
             });*/
            this.setState({
                //拼接数据
                data: this.state.data.concat(data),
                hasMore: hasMore
            });
        });
    }

    //对重新输入搜索条件时重新加载数据
    componentDidUpdate(prevProps, prevState) {
        
        const category = this.props.category;
        const keyword = this.props.keyword;

        //判断当前类别和之前的类别关键字是否完全一样，不一样才重新获取数据
        // 因为组件刷新不一定是类别和关键字改变，所以要保证只有在类别和关键字改变的时候重新获取数据
        if (category === prevProps.category && keyword === prevProps.keyword) {
            return;
        }
        //将组件的数据设置成原始值
        this.setState(initialState);

        //第一次加载数据
        this.loadFirstPageData();
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);