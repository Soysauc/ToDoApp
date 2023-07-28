import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../Api/fetchTodos';
import '../styles/Todos.css';
import '../styles/App.css';
import Elipse from './Elipse';
import SearchBar from './SearchBar';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data);
      setFilteredTodos(data);
    });
  }, []);

  const handleSearch = (searchInput) => {
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className='app__divider'></div>

      {filteredTodos.map((todo) => (
        <div className='todos' key={todo.id}>
          <div style={{ display: 'flex' }}>
            <svg
              className='todos__circle'
              xmlns='http://www.w3.org/2000/svg'
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='#3B3753'
            >
              <circle cx='22' cy='22' r='22' fill='#3B3753' />
            </svg>
            <div className='todos__content'>
              <span className='todo__item-text'>{todo.title}</span>
              <div className='todo__item-id'>User:{todo.userId}</div>
              {/* All of the User Ids of the Array were giving me 1*/}
            </div>
          </div>
          <div style={{ marginRight: '35.5px' }}>
            <Elipse />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
