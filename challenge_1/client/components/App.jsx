import React from 'react';
import axios from 'axios';
// import ReactPaginate from 'react-paginate';

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

  handleSearch() {
    const { search } = this.state;

    axios.get('/events', {
      params: {
        q: search,
        _limit: 10,
      },
    }).then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <Search 
          handleSearchChange={this.handleSearchChange}
          handleSearch={this.handleSearch}
          search={search}
        />
      </div>
    );
  }
}

export default App;
