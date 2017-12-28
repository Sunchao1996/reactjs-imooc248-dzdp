import React from 'react';
import {getInfoData} from '../../../fetch/detail/detail';
import DetailInfo from '../../../components/DetailInfo';

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            info: false
        };
    }

    render() {
        return (
            <div>
                {this.state.info ? <DetailInfo data={this.state.info}/> : ''}
            </div>
        );
    }

    componentDidMount() {
        var id = this.props.id;
        var result = getInfoData(id);
        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                info:json
            });
        })
    }
}
export default Info;