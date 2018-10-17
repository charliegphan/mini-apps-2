import React from 'react';

const Search = ({handleSearchChange, search}) => (
  <div>
    <label>
      Search event
      <input
        value={search}
        onChange={(e) => {handleSearchChange(e.target.value)}}
        />
      <button type="button">Search</button>
    </label>
  </div>
);

export default Search;
