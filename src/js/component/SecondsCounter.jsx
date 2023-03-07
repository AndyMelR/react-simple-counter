import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from "react";

// const [isActive, setIsActive] = useState(true);

// function stopClick() {
//     setIsActive(false);
// }
  


function SecondsCounter(props){
    return (
    <>
        <div className="bigCounter">
            <div className="clock"><FontAwesomeIcon icon={faClock} />
            </div>
            <div className="seconds">{props.digitFour % 10}</div>
            <div className="seconds">{props.digitThree % 10}</div>
            <div className="seconds">{props.digitTwo % 10}</div>
            <div className="seconds">{props.digitOne % 10}</div>
        </div>
        {/* <button onClick={stopClick}>Stop</button> */}
    </>
    );
}

SecondsCounter.propTypes = {
    digitFour:PropTypes.number,
    digitThree:PropTypes.number,
    digitTwo:PropTypes.number,
    digitOne:PropTypes.number,
};


export default SecondsCounter;