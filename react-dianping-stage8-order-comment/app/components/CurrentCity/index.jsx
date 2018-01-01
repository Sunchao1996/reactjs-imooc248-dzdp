import React from 'react';
import './style.less';

class CurrentCity extends React.Component {
    render() {
        return (
            <div className="current-city">
                {this.props.cityName}
            </div>
        );
    }
}
export default CurrentCity;