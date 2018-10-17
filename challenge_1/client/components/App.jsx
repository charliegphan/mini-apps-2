import React from 'react';

import Search from './Search.jsx';

class App extends React.Component {
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
    const { search } = this.state;
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} search={search} />
      </div>
    );
  }
}

export default App;
