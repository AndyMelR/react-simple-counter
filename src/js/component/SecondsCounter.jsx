import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


function SecondsCounter() {
    const [isActive, setIsActive] = useState(true);
    const [seconds, setSeconds] = useState(0);
  
    function stopClick() {
      setIsActive(false);
    }

    function reset() {
        setSeconds(0);
        setIsActive(true);
      }
  
    useEffect(() => {
      let intervalId;
      if (isActive) {
        intervalId = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
      }
      return () => clearInterval(intervalId);
    }, [isActive]);
  
    const four = Math.floor(seconds / 1000);
    const three = Math.floor((seconds % 1000) / 100);
    const two = Math.floor((seconds % 100) / 10);
    const one = seconds % 10;
  
    return (
      <>
        <div className="bigCounter">
          <div className="clock">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="seconds">{four}</div>
          <div className="seconds">{three}</div>
          <div className="seconds">{two}</div>
          <div className="seconds">{one}</div>
        </div>
        <button onClick={stopClick}>Stop</button>
        <button onClick={reset}>Reset</button>
      </>
    );
  }

  export default SecondsCounter;
  
