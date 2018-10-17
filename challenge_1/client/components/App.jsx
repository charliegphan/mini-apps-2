import React from 'react';
import axios from 'axios';
// import ReactPaginate from 'react-paginate';

import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEvents: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    axios.get('/events', {
      params: {
        q: query,
        _limit: 10,
      },
    }).then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
