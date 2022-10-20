import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Login } from './components/Login';

function App() {

  const [token, setToken] = useState(null)

  return (
    <div className="App">
      <Login setToken={setToken} />
      {token && <h1>Jestem zalogowany</h1>}
    </div>
  );
}

export default App;
