import React from 'react';

export default class Counter extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
            <h2>{this.props.count}</h2>
            <button style={{background:"gray"}} onClick={this.props.count != 0 ? this.props.removeFunction : " "}>-</button>
            <button style={{background:"black"}} onClick={this.props.addFunction}>+</button>
            </div>
            </div>
        )
       
    }
}