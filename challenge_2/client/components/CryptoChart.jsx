import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';

class CryptoChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prices: null,
      dates: null,
    }
  }

  renderChart() {
    const node = this.node;
    console.log(this.state.prices);
    console.log(this.state.dates);

    new Chart(node, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          // labels: ["January", "February", "March", "April", "May", "June", "July"],
          labels: this.state.dates,
          datasets: [{
              label: "My First dataset",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: this.state.prices,
          }]
      },
  
      // Configuration options go here
      options: {}
  });
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(({ data }) => this.setState({ 
      dates: Object.keys(data.bpi),
      prices: Object.values(data.bpi),
    }))
    .then(() => this.renderChart())
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <canvas 
          id="myChart"
          ref={node => this.node = node}
          // width="400" 
          // height="400"
        >  
        </canvas>
      </div>
    )
  }
}

export default CryptoChart;
