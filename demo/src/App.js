import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world - have a nice day
        </p>
        <a
          className="App-link"
          href="https://github.com/jayzeng/SPA-experiment"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </header>
    </div>
  );
}

export default App;
