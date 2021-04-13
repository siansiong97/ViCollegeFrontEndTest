import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
