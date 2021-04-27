import React from 'react';
import  { useFetch } from './hooks/useFetch'
import vegaEmbed from 'vega-embed';


function Pres() {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/kelsonflint/474Ass2/master/data/pres.csv"
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
        title: 'Presidential Money',
        width: 700,
        height: 350,
        data: { values: data},
        encoding: {
          y: {field: 'Name', type: 'nominal'},
          x: {field: 'Total Receipts', type: 'quantitative'},
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
            text: {field: "Total Receipts", type: "quantitative"}
          }
        }]
      };
      vegaEmbed('#presChart', yourVlSpec);
    return (
      <div >
        <div className="chart" id="presChart">
           <p>{loading && "Loading data!"}</p>
        </div>
        <p className="description">I was surprised to see how much money they spent. Together they spent nearly $2 Billion on their campaigns.</p>
      </div>
    )
}

export default Pres;