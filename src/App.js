import './App.css';
import Home from './Home/Home';
import BlogPage from './Blog/Blog'
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import SingleBlog from './Blog/SingleBlog';

function App() {
  return (
    // <>
    // 
    // <Home />
    // 
    // </>
    <div className="App">
      <NavBar />
      <Routes >
        <Route path="/" element={ <Home/> } />
        <Route path="blog" element={ <BlogPage /> } />
        <Route path="single-blog" element={ <SingleBlog /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
