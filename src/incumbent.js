import React from 'react';
import  { useFetch } from './hooks/useFetch'
import vegaEmbed from 'vega-embed';


function Incumbent() {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/kelsonflint/474Ass2/master/data/incumbent.csv"
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
        title: 'Incumbent vs Challenger Spending',
        width: 700,
        height: 350,
        data: { values: data},
        encoding: {
          y: {field: 'Seat Status', type: 'nominal'},
          x: {field: 'Total Receipt', type: 'quantitative'},
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
            text: {field: "Total Receipt", type: "quantitative"}
          }
        }]
      };
      vegaEmbed('#inChart', yourVlSpec);
    return (
        <div>
            <div id="inChart">
            <p>{loading && "Loading data!"}</p>
            </div>
            <p className="description">Although there are only 535 seats in congress, the incumbents raised close to $3 Billion just to keep their seats </p>
        </div>
    )
}

export default Incumbent;