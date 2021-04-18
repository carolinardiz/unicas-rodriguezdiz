import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="topbar">
        <img src={logo} className="logo" />
        <nav>
          <ul>
            <li className="link">
              <a href=""> Home</a>
            </li>

            <li className="link">
              <a href=""> Productos  </a>
            </li>

            <li className="link">
              <a href=""> Recursos</a>
            </li>

            <li className="link">
              <a href=""> Contacto</a>
            </li>

          </ul>
        </nav>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
