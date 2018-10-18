import React from 'react';

import Search from './Search.jsx';
import CryptoChart from './CryptoChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(search) {
    console.log(search)
  }

  render() {
    const { bpi } = this.state;
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <CryptoChart bpi={bpi}/>
      </div>
    )
  }
}

export default App;
