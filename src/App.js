import React from "react";
import './App.css';
import './Styles/Global.css'
import Box from './Components/box';

const tempMin = 20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			water: 1.5,
			heart: 120,
			temperature: -10,
			steps: 3000
		}
	}
	calculateWater = () => {
		let water = 1.5;
		const temperature = this.state.temperature;
		const heart = this.state.heart;
		const steps = this.state.steps;
		if (temperature > 20) {
			water += temperature % 20 * 0.02;
		}
		if (heart > 120) {
			water += heart % 120 * 0.00008;
		}
		if (steps > 10_000) {
			water += steps % 10_000 * 0.00002;
		}
		water = water.toFixed(2)
		this.setState({ water })
	}

	onHeartChange = (e) => {
		let heart = e.target.value
		this.setState({ heart });
		this.calculateWater();
	}
	onTempChange = (e) => {
		let temperature = e.target.value
		this.setState({ temperature });
		this.calculateWater();
	}
	onStepsChange = (e) => {
		let Steps = e.target.value
		this.setState({Steps});
		this.calculateWater();
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">

					{/* Water */}
					<Box icon="local_drink" value={this.state.water} unit="L" color="#3A85FF" />

					{/* Steps */}
					<Box icon="directions_walk" min={stepsMin} max={stepsMax} value={this.state.steps} onChange={this.onStepsChange} unit="steps" color="black" />

					{/* Heart */}
					<Box icon="favorite" min={heartMin} max={heartMax} value={this.state.heart} onChange={this.onHeartChange} unit="bpm" color="red" />

					{/* Temperature */}
					<Box icon="wb_sunny" min={tempMin} max={tempMax} value={this.state.temperature} onChange={this.onTempChange} unit="°C" color="yellow" />
				</div>
			</div>
		);
	}
}
export default App;
