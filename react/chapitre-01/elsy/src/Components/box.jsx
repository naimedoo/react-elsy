import React from 'react';

function Box(props) {
    return (
       <div className='box col-sm-3 col-6'>
        <span className ="material-icons" style={{fontSize : "100px",color:props.color}}>{props.icon}</span>
      <p>{props.value} {props.unit}</p>
      </div>
    )
}
export default Box;