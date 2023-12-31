import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ handleSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    handleSearch(event.target.value); // Call the handleSearch function from the parent component (Todos) with the search input value
  };
  return (
    <div className='searchbar'>
      <input
        type='text'
        placeholder='Search Todo&#39;s'
        value={searchInput}
        onChange={handleInputChange}
      ></input>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.16675 3.33335C5.94509 3.33335 3.33341 5.94503 3.33341 9.16669C3.33341 12.3883 5.94509 15 9.16675 15C12.3884 15 15.0001 12.3883 15.0001 9.16669C15.0001 5.94503 12.3884 3.33335 9.16675 3.33335ZM1.66675 9.16669C1.66675 5.02455 5.02461 1.66669 9.16675 1.66669C13.3089 1.66669 16.6667 5.02455 16.6667 9.16669C16.6667 13.3088 13.3089 16.6667 9.16675 16.6667C5.02461 16.6667 1.66675 13.3088 1.66675 9.16669Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.2857 13.2858C13.6111 12.9603 14.1388 12.9603 14.4642 13.2858L18.0892 16.9108C18.4146 17.2362 18.4146 17.7638 18.0892 18.0893C17.7638 18.4147 17.2361 18.4147 16.9107 18.0893L13.2857 14.4643C12.9603 14.1388 12.9603 13.6112 13.2857 13.2858Z'
          fill='white'
        />
      </svg>
    </div>
  );
}

export default SearchBar;
