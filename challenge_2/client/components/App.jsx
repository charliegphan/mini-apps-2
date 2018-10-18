import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import CryptoChart from './CryptoChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bpi: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(({ data }) => this.setState({ bpi: data.bpi }))
      .catch(err => console.log(err))
  }

  handleSearch(search) {
    console.log(search)
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <CryptoChart />
      </div>
    )
  }
}

export default App;
