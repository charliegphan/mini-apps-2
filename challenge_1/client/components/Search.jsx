import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(search) {
    this.setState({ search });
  }

  render() {
    const { handleSearch } = this.props;
    const { search } = this.state;
    return (
      <div>
        <label>
          Search event
          <input
            value={search}
            onChange={e => this.handleSearchChange(e.target.value)}
          />

          <button
            type="button"
            onClick={() => handleSearch(search)}
          >
          Search
          </button>

        </label>
      </div>
    );
  }
}

export default Search;
