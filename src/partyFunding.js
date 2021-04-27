import React from 'react';
import  { useFetch } from './hooks/useFetch'
import vegaEmbed from 'vega-embed';

function PartyChart() {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/kelsonflint/474Ass2/master/data/parties.csv"
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
        title: 'Funding by Political Party',
        width: 700,
        height: 350,
        data: { values: data},
        encoding: {
          x: {field: 'Party', type: 'nominal', sort: "null"},
          y: {field: 'Total Receipt', type: 'quantitative'},
          color: party_colors['Party']
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
            text: {field: "Total Receipt", type: "quantitative"}
          }
        }]
      };
      vegaEmbed('#partyChart', yourVlSpec);
    return (
      <div>
        <div id="partyChart">
           <p>{loading && "Loading data!"}</p>
        </div>
        <p className="description">The top 5 funded Political Parties... The Dems spent double what the Republicans did, and 100 times more than the next strongest party (Libertarian) </p>
      </div>
    )
}

export default PartyChart;