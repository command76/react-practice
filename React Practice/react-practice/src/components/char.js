import React from 'react';

export default class Char extends React.Component {
    render() {
        const STYLES = {
            "display": "inline-block",
            "padding":"16px",
            "textAlign":'center',
            'margin':'16px',
            'border':'1px solid red'
        }
        return (
            <div style={STYLES} onClick={this.props.removeItem} >{this.props.textReceived}</div>
        )
    }
}