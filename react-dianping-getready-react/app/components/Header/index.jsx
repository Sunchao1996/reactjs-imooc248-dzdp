import React from 'react'

class Header extends React.Component {
    render() {
        return (
             <p onClick={this.clickHandler.bind(this)}>{this.props.title}</p>
        )
    }
    clickHandler(){
        console.log(Date.now());
    }
}

export default Header