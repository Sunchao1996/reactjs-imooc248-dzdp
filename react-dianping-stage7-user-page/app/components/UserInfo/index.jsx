import React from 'react';
import './style.less';

class UserInfo extends React.Component {
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    {this.props.userinfo.username}
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    &nbsp;
                    {this.props.userinfo.cityName}
                </p>
            </div>
        );
    }
}
export default UserInfo;