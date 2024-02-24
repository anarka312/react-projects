import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  return <div className="App"></div>;
}

export default App;