import './App.css';
import CommitViewer from './pages/commits/commit';
import Home from './pages/home/home';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Commits' element={<CommitViewer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
