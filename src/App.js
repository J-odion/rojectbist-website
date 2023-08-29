import './App.css';
import Home from './Home/Home';
import BlogPage from './Blog/Blog'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <>
    // <NavBar />
    // <Home />
    // <Footer />
    // </>
    <div className="App">
      <Routes >
        <Route path="/" element={ <Home/> } />
        <Route path="blog" element={ <BlogPage /> } />
      </Routes>
    </div>
  );
}

export default App;
