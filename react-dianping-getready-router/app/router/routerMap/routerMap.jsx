import React from 'react';
import {Router,Route,IndexRoute} from 'react-router'

import App from '../../containers/App';
import Home from '../../containers/Home';
import List from '../../containers/List';
import Detail from '../../containers/Detail';
import NotFound from '../../containers/NotFound';

class RouterMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发');
        //统计PV
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/'   component={App}>
                    {/*默认的访问组件*/}
                    <IndexRoute component={Home}/>
                    <Route path='list' component={List}/>
                    {/*/:id表示参数*/}
                    <Route path='detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap;