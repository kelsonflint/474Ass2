import React, {useState} from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear } from "d3-scale";
import { extent, max, min, bin } from "d3-array";
import { scale } from "vega";
import * as topojson from "topojson-client";
import world from "../land-50m";
import Pres from './pres';
import PartyChart from './partyFunding';
import NextPres from './nextPres';
import HighestSen from './highestSen';
import HighestHouse from './highestHouse';
import States from './states';
import Candidates from './candidates';
import Incumbent from './incumbent';
import vegaEmbed from 'vega-embed';

// https://observablehq.com/@jermspeaks/async-await

const App = () => {
  const [count, setCount] = useState(0);

  const comps = [<Pres />,
    <NextPres />,
    <HighestSen />,
    <HighestHouse />,
    <Incumbent />,
    <States />,
    <PartyChart />,
    <Candidates />
    ]

    function handleNext() {
      if (count == 7) {
        setCount(0)
      } else {
        setCount(count + 1)
      }
    };
    function handleBack() {
      if (count == 0) {
        setCount(7)
      } else {
        setCount(count - 1)
      }
    };

  return (
    <div>
      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>

      {comps[count]}

      <button style={{float:"left"}} onClick={handleBack}>BACK</button>
      <button style={{float:"left"}} onClick={handleNext}>NEXT</button>
      
    </div>
  )
};

export default App;
