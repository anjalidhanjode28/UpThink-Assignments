import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['Day1', 'Day2', 'Day3',
           'Day4', 'Day5'],
  datasets: [
    {
      label: 'submissiom',
      fill: true,
      lineTension: 0.5,
      backgroundColor: '#6fb33f',
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
      data: [70, 75, 65, 70, 75]
    }
  ]
}

export default class Graph extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              backgroundColor: "green",
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}