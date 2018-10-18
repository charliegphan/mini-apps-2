import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }
  }

  handleSearchChange(search) {
    this.setState({
      search,
    })
  }

  render() {
    const { search } = this.state;
    const { handleSearch } = this.props;
    return (
      <div> 
        <input 
          value={search}
          onChange={(e) => this.handleSearchChange(e.target.value)}
        />
        <button onClick={() => handleSearch(search)}>
          Search 
        </button>
      </div>
    )
  }
}

export default Search;