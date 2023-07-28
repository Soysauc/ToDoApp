import './styles/App.css';
import Elipse from './components/Elipse';
import AddNew from './components/AddNew';
import SearchBar from './components/SearchBar';
import Todos from './components/Todos';

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <div className='app__header-row'>
          <h1 className='app__title'>ToDo's</h1>
          <Elipse />{' '}
        </div>
        <div className='app__header-toggle'>
          <span>Open</span>
          <span>Closed</span>
        </div>
        <div className='app__gradient'></div>
      </header>
      <div>
        <section className='app__scroller'>
          <Todos />
        </section>
        <AddNew />
      </div>
    </div>
  );
}

export default App;
