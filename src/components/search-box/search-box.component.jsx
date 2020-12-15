import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ value, placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
  />
);
