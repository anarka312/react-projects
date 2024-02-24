import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return <div className="App">
    <Wrapper color="lightblue">
      <h2>Next inside Wrapper</h2>
      <button>Click me!</button>
    </Wrapper>
  </div>;
}

export default App;
