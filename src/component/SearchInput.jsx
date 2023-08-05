import React, { useState } from 'react';
import "./SearchInput.css"

const SearchInput = ({ onSearch }) => {
  const [inputText, setInputText] = useState('');

  const handleSearch = () => {
    onSearch(inputText);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter category name (Example food, landscape)"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
