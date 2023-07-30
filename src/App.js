import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Elipse from './components/Elipse';
import Todos from './components/Todos';
import AddNew from './components/AddNew';
import NewTodoForm from './components/NewTodoForm';
import { fetchTodos } from './Api/fetchTodos';

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [view, setView] = useState('open');
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    fetchTodos()
      .then((data) => {
        setTodos(data);
        localStorage.setItem('todos', JSON.stringify(data));
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (newTodoItem) => {
    setTodos((prevTodos) => [newTodoItem, ...prevTodos]);
    localStorage.setItem('todos', JSON.stringify([newTodoItem, ...todos]));
  };
  const markAsCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };
  const toggleQuote = () => {
    setShowQuote(!showQuote);
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const openTodos = todos.filter((todo) => !todo.completed);
  const closedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className='app'>
      <header className='app__header'>
        <div className='app__header-row'>
          <h1 className='app__title'>ToDo's</h1>
          <Elipse toggleQuote={toggleQuote} />
        </div>
        {showQuote && (
          <div className='quote-bubble'>
            <span>This ellipse wasn't specified in the Figma</span>
          </div>
        )}
        <div className='app__header-toggle'>
          <span
            className={`selected ${view === 'open' ? 'active' : ''}`}
            onClick={() => setView('open')}
          >
            Open
          </span>
          <span
            className={`selected ${view === 'closed' ? 'active' : ''}`}
            onClick={() => setView('closed')}
          >
            Closed
          </span>
        </div>

        <div className='app__gradient'></div>
      </header>
      <div className='app__content'>
        <section className='app__scroller'>
          {view === 'open' ? (
            <Todos
              todos={openTodos}
              type='open'
              addTodo={addTodo}
              markAsCompleted={markAsCompleted}
              toggleEditForm={toggleEditForm}
            />
          ) : (
            <Todos
              todos={closedTodos}
              type='closed'
              markAsCompleted={markAsCompleted}
              toggleEditForm={toggleEditForm}
            />
          )}
        </section>
        <AddNew showForm={showForm || showEditForm} toggleForm={toggleForm} />
      </div>
      {showForm && <NewTodoForm toggleForm={toggleForm} addTodo={addTodo} />}
    </div>
  );
}

export default App;
