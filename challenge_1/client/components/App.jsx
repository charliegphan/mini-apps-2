import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import Search from './Search.jsx';
import Event from './Event.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      page: 0,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    axios.get('/events', {
      params: {
        q: query,
        _limit: 10,
      },
    }).then(({ data }) => this.setState({ events: data }))
      .catch(err => console.log(err));
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
        />
        {events.map((event) => {
          return <Event event={event} />;
        })}
        <ReactPaginate />
      </div>
    );
  }
}

export default App;
