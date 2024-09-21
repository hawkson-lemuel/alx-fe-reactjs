import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { outputApiKey } from './services/githubApi';
import './App.css';
import Search from './components/Search';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;