import React from "react";

export default class box extends React.Component {
  constructor(props) {
    super(props)
  }
  renderInput() {
    if (this.props.icon !== "local_drink") {
      return <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChange} />
    } else {
      return null
    }
  }
  render() {
    let stepRange = 1;
    if (this.props.icon === "direction_walk") {
       stepRange = 1_000
    }
    return (
     <div className="box col-sm-3 col-6">
        <span className="material-icons" style={{ fontSize: "100px", color: this.props.color }}>
          {this.props.icon}
        </span>
        <p>{this.props.value} {this.props.unit}</p>
        {this.renderInput()}
      </div>
    )
  }
}
