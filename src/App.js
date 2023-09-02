import './App.css';
import Home from './Home/Home';
import BlogPage from './Blog/Blog'
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
