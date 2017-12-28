import React from 'react';
import './style.less'
class LoadMore extends React.Component {
    render() {
        return (
            <div className="load-more" ref={e=>this.wrapper=e}>
                {this.props.isLoadingMore ? <span>加载中...</span> :
                    <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>}
            </div>
        );
    }

    loadMoreHandle() {
        //执行传递过来的loadMoreData函数
        this.props.loadMoreFn();
    }

    componentDidMount() {
        //截流，由于scroll变化太快，对前台性能消耗较大，因此每次滚动时，定义回调函数，根据回调函数是否有值来回调callback
        let timeoutId;
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.wrapper;
        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if(top && top <windowHeight){
                //当wrapper已经被滚动到暴露在页面可视范围之内的时候触发
                loadMoreFn();
            }

        }

        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 50);
        }.bind(this));
    }
}
export default LoadMore;