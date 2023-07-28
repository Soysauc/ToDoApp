import './styles/App.css';
import Elipse from './components/Elipse';
import AddNew from './components/AddNew';
import SearchBar from './components/SearchBar';

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
      </header>
      <body>
        <SearchBar />
        <div>Divider</div>
        <AddNew />
      </body>
    </div>
  );
}

export default App;
