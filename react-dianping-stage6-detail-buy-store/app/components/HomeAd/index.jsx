import React from 'react';

import './style.less'
class HomeAd extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div id="home-ad">
                <h2>超级特惠</h2>
                <div className="ad-container clear-fix">
                    {
                        data.map(function (item, index) {
                            return (<div key={index} className="ad-item float-left">
                                <a href={item.link} target="_blank">
                                    <img src={item.img} alt={item.title}/>
                                </a>
                            </div>);
                        }.bind(this))
                    }
                </div>
            </div>
        );
    }
}
export default HomeAd;