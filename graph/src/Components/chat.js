const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: Utils.numbers({count: 6, min: -100, max: 100}),
        borderColor: Utils.CHART_COLORS.red,
        fill: false,
        stepped: true,
      }
    ]
  };
  
  const chartConfig = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'My Chart Title'
        }
      },
      scales: {
        xAxes: [{
          id: 'x-axis-0'
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves
        }
      },
      backgroundColor: {
        type: 'linear',
        xAxisID: 'x-axis-0',
        colorStops: [
          {
            offset: 0,
            color: 'green'
          },
          {
            offset: 1,
            color: 'white'
          }
        ]
      }
    }
  };
  
  // create the chart
  const myChart = new Chart(ctx, chartConfig);