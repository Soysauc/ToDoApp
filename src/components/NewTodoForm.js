import React, { useState } from 'react';
import '../styles/NewTodoForm.css';

function NewTodoForm({ showForm, toggleForm }) {
  const [newTodo, setNewTodo] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleAddTodo = () => {
    console.log('New Todo:', {
      title: newTodo,
      user: selectedUser,
      status: selectedStatus,
    });

    setNewTodo('');
    setSelectedUser('');
    setSelectedStatus('');
    toggleForm();
  };

  return (
    <div className={`new-todo-form ${showForm ? 'show' : 'hide'}`}>
      <div className='new-todo-form__content'>
        <svg
          className='new-todo-form__arrow'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M11.4375 18.75L4.6875 12L11.4375 5.25'
            stroke='white'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M5.625 12L19.3125 12'
            stroke='white'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        <h2 className='new-todo-form__title'>Add ToDo</h2>
      </div>
      <input
        className='new-todo-form__input'
        type='text'
        placeholder='New Todo'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <select
        className='new-todo-form__select'
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value=''>Select User</option>
        <option value='User1'>User 1</option>
        <option value='User2'>User 2</option>
        <option value='User3'>User 3</option>
      </select>

      <select
        className='new-todo-form__select'
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
      >
        <option value=''>Status</option>
        <option value='Completed'>Completed</option>
        <option value='Incomplete'>Incomplete</option>
      </select>

      <button className='new-todo-form__finish' onClick={handleAddTodo}>
        Finish
      </button>
      <button className='new-todo-form__quit'>Quit</button>
    </div>
  );
}

export default NewTodoForm;
