import './App.css';
import CommitViewer from './pages/commits/commit';
import Home from './pages/home/home';
import { useState, createContext } from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

export const CommitLinkContext = createContext();

function App() {
  const [commitLink, setCommitLink] = useState(null);
  
  return (
    <CommitLinkContext.Provider value={[commitLink, setCommitLink]}>
      <Router className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Commits' element={<CommitViewer/>}/>
        </Routes>
      </Router>
    </CommitLinkContext.Provider>
  );
}

export default App;
