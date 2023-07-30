import React, { useState } from 'react';
import '../styles/NewTodoForm.css';

function NewTodoForm({ toggleForm, addTodo }) {
  const [newTodo, setNewTodo] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleAddTodo = () => {
    if (!newTodo || !selectedUser || !selectedStatus) {
      alert('Please fill in all fields.');
      return;
    }

    const newTodoItem = {
      userId: parseInt(selectedUser.replace('User', '')),
      id: 0,
      title: newTodo,
      completed: selectedStatus === 'Completed' ? true : false,
    };

    addTodo(newTodoItem);
    console.log(newTodoItem); // Add this line

    setNewTodo('');
    setSelectedUser('');
    setSelectedStatus('');
    toggleForm();
  };

  const handleBackButton = () => {
    toggleForm();
  };

  return (
    <div className='new-todo-form'>
      <div className='new-todo-form__content'>
        <svg
          className='new-todo-form__arrow'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          onClick={handleBackButton}
        >
          <path
            d='M11.4375 18.75L4.6875 12L11.4375 5.25'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5.625 12L19.3125 12'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
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
      <button className='new-todo-form__quit' onClick={handleBackButton}>
        Quit
      </button>
    </div>
  );
}

export default NewTodoForm;
