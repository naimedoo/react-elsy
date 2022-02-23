import React from 'react';

export default class Counter extends React.Component {
    render() {
        return (
            <div>
            <h2>{this.props.count}</h2>
            <button style={{background:"green"}} onClick={this.props.removeFunction}>-</button>
            <button style={{background:"red"}} onClick={this.props.addFunction}>+</button>
            </div>
        )
       
    }
}