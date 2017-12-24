import React from 'react';

class Detail extends React.Component {
    render() {
        return (
            <div>
                Detail,url param:{this.props.params.id}
            </div>
        );
    }
}
export default Detail;