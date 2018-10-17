import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchChange(search) {
    this.setState({ search });
  }

  search() {
    const { search } = this.state;
    const query = `q=${search}`;
    axios.get()

  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} search={search} />
      </div>
    );
  }
}

export default App;
