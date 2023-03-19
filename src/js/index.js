//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter.jsx";



// include your styles into the webpack bundle
import "../styles/index.css";

const four = 0;
const three = 0;
const two = 0;
const one = 0;

 ReactDOM.render(<SecondsCounter 
    digitOne={one}
    digitTwo={two} 
    digitThree={three}
     digitFour={four} />,
      document.querySelector("#app"));
