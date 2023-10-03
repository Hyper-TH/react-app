import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';

// Router: defines where exactly in our app we want to have different routes
// Routes: way to change only a specific portion of your site

/* React Router DOM */
function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/menu" element={<Menu />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;