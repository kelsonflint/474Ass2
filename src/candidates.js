import React from 'react';
import  { useFetch } from './hooks/useFetch'
import vegaEmbed from 'vega-embed';


function Candidates() {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/kelsonflint/474Ass2/master/data/candidates.csv"
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
        title: 'Candidates per Office',
        width: 700,
        height: 350,
        data: { values: data},
        encoding: {
          y: {field: 'Office', type: 'nominal'},
          x: {field: 'Candidates', type: 'quantitative'},
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
            text: {field: "Candidates", type: "quantitative"}
          }
        }]
      };
      vegaEmbed('#canChart', yourVlSpec);
    return (
        <div>
            <div id="canChart">
            <p>{loading && "Loading data!"}</p>
            </div>
            <p className="description">I am shocked that 1227 people ran for president this year, yet on election day you basically only get to choose between 2.</p>
        </div>
    )
}

export default Candidates;