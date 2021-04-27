import React from 'react';
import  { useFetch } from './hooks/useFetch'
import vegaEmbed from 'vega-embed';


function NextPres() {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/kelsonflint/474Ass2/master/data/highestP.csv"
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
        title: 'Other Presidential Candidate Spending',
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
            text: {field: "Total Receipt", type: "quantitative"}
          }
        }]
      };
      vegaEmbed('#nextPresChart', yourVlSpec);
    return (
      <div>
        <div className="chart" id="nextPresChart">
           <p>{loading && "Loading data!"}</p>
        </div>
        <p className="description">Aside from the two main contenders, the next 8 top raisers were all democrat...Except for a man named Dan "Taxation is Theft" Behrman. Dan is a libertarian who believes the government has no rights to tell him what he can and cannot do. He somehow raised 50 Million dollars.</p>
      </div>
        
    )
}

export default NextPres;