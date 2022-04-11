import './App.css';
import Index from './components/index';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<Index/>}/>
      </Routes>
    </div>
  );
}

export default App;
