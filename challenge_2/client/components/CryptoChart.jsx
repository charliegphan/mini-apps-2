import React from 'react';
import Chart from 'chart.js';

class CryptoChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    const node = this.node;

    new Chart(node, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "# of Likes",
            data: [12, 19, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas 
          id="myChart"
          ref={node => this.node = node}
        >  
        </canvas>
      </div>
    )
  }
}

export default CryptoChart;