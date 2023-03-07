//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter.jsx";
import PropTypes from 'prop-types';


// include your styles into the webpack bundle
import "../styles/index.css";

let seconds = 0;

setInterval(() => {
    const four = Math.floor(seconds/1000);
    const three = Math.floor(seconds/100);
    const two = Math.floor(seconds/10);
    const one = Math.floor(seconds/1);

    seconds++;

    ReactDOM.render(<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector("#app"));
}, 1000);


    


//render your react application

