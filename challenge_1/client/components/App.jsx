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
      pageCount: 10,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    axios.get('/events', {
      params: {
        q: query
      },
    }).then(({ data }) => 
      this.setState({ 
        events: data,
        pageCount: Math.ceil(data.length / 10),
      })
    ).catch(err => console.log(err));
  }

  handlePageChange({ selected }) {
    console.log(selected);
  }

  render() {
    const { events, pageCount } = this.state;
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
        />

        {events.map((event) => {
          return <Event {...event} />;
        })}

        <ReactPaginate
          pageCount={pageCount}
          pageRange={pageCount}
          marginPagesDisplayed={2}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
