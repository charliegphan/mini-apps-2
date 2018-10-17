import React from 'react';

const Search = ({handleSearchChange, handleSearch, search}) => (
  <div>
    <label>
      Search event
      <input
        value={search}
        onChange={(e) => {handleSearchChange(e.target.value)}}
      />

      <button 
        type="button"
        onClick={() => handleSearch()}
      >
      Search
      </button>

    </label>
  </div>
);

export default Search;
