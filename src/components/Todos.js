import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../Api/fetchTodos';
import '../styles/Todos.css';
import '../styles/App.css';
import Elipse from './Elipse';
import SearchBar from './SearchBar';

function Todos({ type }) {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [quoteId, setQuoteId] = useState(null);
  const [filteredOpenTodos, setFilteredOpenTodos] = useState([]);
  const [filteredClosedTodos, setFilteredClosedTodos] = useState([]);

  // useEffect(() => {
  //   fetchTodos().then((data) => {
  //     setTodos(data);
  //     setFilteredTodos(data);
  //     setFilteredOpenTodos(data.filter((todo) => !todo.completed));
  //     setFilteredClosedTodos(data.filter((todo) => todo.completed));
  //   });
  // }, []);
  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(
        data.filter((todo) =>
          type === 'open' ? !todo.completed : todo.completed
        )
      );
    });
  }, [type]);

  const handleSearch = (searchInput) => {
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredTodos(filtered);
  };
  const toggleQuote = (id) => {
    setQuoteId(id === quoteId ? null : id);
  };
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className='app__divider'></div>

      {todos.map((todo) => (
        <div className={`todos todos--${type}`} key={todo.id}>
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
            <Elipse id={todo.id} toggleQuote={toggleQuote} />{' '}
            {/* pass id and toggleQuote function as props */}
          </div>
          {quoteId === todo.id && (
            <div className='quote-bubble'>
              <span>Edit ToDo</span>
              <div className='quote__divider'></div>

              <span>Mark Completed</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todos;
