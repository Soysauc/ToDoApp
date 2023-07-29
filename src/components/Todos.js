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

  useEffect(() => {
    fetchTodos().then((data) => {
      const filteredData = data.filter((todo) =>
        type === 'open' ? !todo.completed : todo.completed
      );
      setTodos(filteredData);
      setFilteredTodos(filteredData);
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

      {filteredTodos.map((todo) => (
        <div className={`todos todos--${type}`} key={todo.id}>
          <div style={{ display: 'flex' }}>
            {todo.completed ? (
              <svg
                className='todos__check'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='14'
                viewBox='0 0 20 14'
                fill='none'
              >
                <mask
                  id='mask0_2_479'
                  style={{ maskType: 'luminance' }}
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='20'
                  height='14'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 0H20V13.4548H0V0Z'
                    fill='white'
                  />
                </mask>
                <g mask='url(#mask0_2_479)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M19.68 0.974474L19.0249 0.31935C18.8191 0.113334 18.5446 0 18.2516 0C17.9586 0 17.6839 0.113334 17.4781 0.31935L8.2727 9.52457L2.52131 3.77302C2.31545 3.56732 2.04082 3.45383 1.74781 3.45383C1.45496 3.45383 1.18049 3.56732 0.974474 3.77302L0.319188 4.42798C0.113171 4.63432 0 4.90912 0 5.2018C0 5.49465 0.113171 5.76928 0.319188 5.9753L6.81286 12.4686C6.82148 12.4809 6.83058 12.4922 6.84115 12.5026L7.49644 13.147C7.70229 13.3522 7.97693 13.4549 8.27221 13.4549H8.27563C8.5688 13.4549 8.84343 13.3522 9.04896 13.147L9.70441 12.4969C9.71498 12.4865 9.72392 12.4779 9.72929 12.4692L19.6799 2.51952C20.1067 2.09366 20.1067 1.40082 19.68 0.974474Z'
                    fill='white'
                  />
                </g>
              </svg>
            ) : (
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
            )}
            <div className='todos__content'>
              <span className='todo__item-text'>{todo.title}</span>
              <div className='todo__item-id'>User:{todo.userId}</div>
              {/* All of the User Ids of the Array were giving me 1 or two from the dataset*/}
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
