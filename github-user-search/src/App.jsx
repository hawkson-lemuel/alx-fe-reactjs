import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { outputApiKey } from './services/githubApi';

function App() {
  const apiKey = import.meta.env.REACT_APP_GITHUB_API_KEY;

  return (
    <>
      {outputApiKey()}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;