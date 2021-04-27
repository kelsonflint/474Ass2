import React from 'react';
import  { useFetch } from './hooks/useFetch'
import vegaEmbed from 'vega-embed';


function States() {

    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/kelsonflint/474Ass2/master/data/states.csv"
      );
      

    var stateSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        description: 'A simple bar chart with embedded data.',
        title: 'Congressional Campaign Spending per State',
        width: 700,
        height: 350,
        data: { values: data},
        encoding: {
          x: {field: 'State', type: 'nominal', sort: "null"},
          y: {field: 'Total Receipts', type: 'quantitative'},
        },
        layer: [{
          mark: 'bar'
        },
        { mark: {
            type: "text",
            align: "center",
            baseline: "line-bottom",
        },
          encoding: {
            text: {field: "Total Receipts", type: "quantitative"}
          }
        }]
      };
    var yourVlSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 500,
        "height": 300,
        "projection": {
            "type": "albersUsa"
        },
        "layer": [
            {
              "data": {
                "url": "https://raw.githubusercontent.com/vega/vega/master/docs/data/us-10m.json",
                "format": {
                  "type": "topojson",
                  "feature": "states"
                }
              },
              "mark": {
                "type": "geoshape",
                "fill": "lightgray",
                "stroke": "white"
              }
            },
            {
                "mark": "geoshape",
                "encoding": {
                "shape": {"field": "geo", "type": "geojson"},
                "color": {"field": "Total Receipts", "type": "quantitative"},
                }
            }
        ]
    }

    vegaEmbed('#statesChart', stateSpec)
    //vegaEmbed('#states', yourVlSpec);
    
    return (
        
      <div>
      <div id="statesChart">
      <p>{loading && "Loading data!"}</p>
      </div>
      <p className="description">Due to Georgia's run off elections, an enourmous amount of money was poured into those 2 senate races.</p>
  </div>

    )
}

export default States;