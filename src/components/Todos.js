import React from 'react';
import { fetchTodos } from '../Api/fetchTodos';
import '../styles/Todos.css';
import Elipse from './Elipse';

function Todos() {
  return (
    <div className='todos'>
      <div className='todo__item'>
        <svg
          className='todos__circle'
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          viewBox='0 0 44 44'
          fill='none'
        >
          <circle cx='22' cy='22' r='22' fill='#3B3753' />
        </svg>
        <div className='todos__content'>
          <span className='-text'>UI Design</span>
          <div className='todo__item-id'>User:2</div>
        </div>
      </div>
      <div style={{ marginRight: '35.5px' }}>
        <Elipse />
      </div>
    </div>
  );
}

export default Todos;
