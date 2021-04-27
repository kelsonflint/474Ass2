import React from 'react';
import  { useFetch } from './hooks/useFetch'
import vegaEmbed from 'vega-embed';


function HighestHouse() {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/kelsonflint/474Ass2/master/data/highestH.csv"
      );
    
        party_colors = {
          "REP": "#ff0000",
          "DEM": "#0000ff",
          "LIB": "#ffff00",
          "GRE": "#00ff00"
        }
    
      var yourVlSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        description: 'A simple bar chart with embedded data.',
        title: 'Top Funded House Campaigns',
        width: 700,
        height: 350,
        data: { values: data},
        encoding: {
          y: {field: 'Name', type: 'nominal', sort: null},
          x: {field: 'Total Receipt', type: 'quantitative'}
        },
        layer: [{
          mark: 'bar'
        },
        { mark: {
            type: "text",
            align: "left",
            baseline: "middle",
            dx: 3
        },
          encoding: {
            text: {field: "Cand_Incumbent_Challenger_Open_Seat", type: "nominal"}
          }
        }]
      };
      vegaEmbed('#hChart', yourVlSpec);
    return (
        <div>
            <div id="hChart">
            <p>{loading && "Loading data!"}</p>
            </div>
            <p className="description">All of the top 10 funded campaigns within the house were for Incumbents to keep their seats...</p>
        </div>
    )
}

export default HighestHouse;