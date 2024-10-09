import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to="/" className="logo">
                Facebook
          </Link>
          <Link to="/createpost">Create A Post</Link> <br></br>
          <Link to="/">Home Page</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/createpost" element={<CreatePost />} /> 
          <Route path="/post/:id" element={<Post />} /> c
        </Routes>
      </Router>
    </div>
  );
}

export default App;
