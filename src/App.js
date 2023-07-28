import React, { useState } from 'react';
import './styles/App.css';
import Elipse from './components/Elipse';
import Todos from './components/Todos';
import AddNew from './components/AddNew';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const addTodo = (newTodoItem) => {
    setTodos([...todos, newTodoItem]);
  };
  const toggleQuote = () => {
    setShowQuote(!showQuote);
  };

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
          <span>Open</span>
          <span>Closed</span>
        </div>
        <div className='app__gradient'></div>
      </header>
      <div className='app__content'>
        <section className='app__scroller'>
          <Todos todos={todos} />
        </section>
        <AddNew toggleForm={() => setShowForm(true)} />
      </div>
      {showForm && (
        <NewTodoForm toggleForm={() => setShowForm(false)} addTodo={addTodo} />
      )}
    </div>
  );
}

export default App;
