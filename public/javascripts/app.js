function generateGraph(data) {

  var graphVersion = document.getElementById('graph').getContext('2d');
  Chart.defaults.global.defaultFontSize = 20;
  var myChart = new Chart(graphVersion, {
    type: 'line',
    data: {
      datasets: [{
        label: "download count",
        data: data,
        fill: false,
        borderColor: 'blue'
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            tooltipFormat: 'll HH:mm',
            unit: 'day',
            displayFormats: {
              'day': 'DD/MM/YYYY'
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Downloads'
          }
        }]
      }
    }
  });
}

let plots = []

for (let plot of data) {
  plots.push({
    t: plot.timestamp,
    y: plot.counter
  })
}

generateGraph(plots)
