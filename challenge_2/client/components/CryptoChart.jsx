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

    new Chart(node, {
      type: 'line',
      data: {
          labels: this.state.dates,
          datasets: [{
              label: "Bitcoin USD",
              borderColor: 'rgb(0, 0, 0)',
              data: this.state.prices,
          }]
      },
      options: {
        elements: {
          line: {
              tension: 0
          }
      }
      }
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
      <div style={{"height": 600,
                    "width": 900}}>
        <canvas 
          id="myChart"
          ref={node => this.node = node}
        >  
        </canvas>
        powered by coindesk ^_^
      </div>
    )
  }
}

export default CryptoChart;
