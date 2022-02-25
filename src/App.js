import React from "react";
import './App.css';
import Box from "./Components/box";
import'./Styles/Global.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

function App() {
    return (
     <div className="container-fluid">
        <div className="row">
        {/* WATER */}
        <Box icon = "local_drink" color="#3A85FF" value={1.5} unit ="L"/>
        {/* Steps */}
        <Box icon ="directions_walk" color="black" value={3000} unit ="steps"/>
        {/*HEART*/}
        <Box icon= "favorite" color="red" value={120} unit="bpm"/>
        {/* TEMPERATURE */}
        <Box icon="wb_sunny" color="yellow" value={-10} unit="°C"/>
        <p>Heart : {heartMin}</p>
        <p>Heart : {tempMin}</p>
        <p>Heart : {stepsMin}</p>
        </div>
      </div>
    );
}
export default App;
