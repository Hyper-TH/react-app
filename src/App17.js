import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';

// Use context api to store all states to avoid prop drilling
export const AppContext = createContext();  // Global context

/* State Management useContext hook*/
function App() {
    const [username, setUsername] = useState("Hyper");
    
    return (
        <div className='App'>
            <AppContext.Provider value={{username, setUsername}}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/menu" element={<Menu />}/>
                        <Route path="/profile" element={<Profile />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    );
}
export default App;


/*
    Prop drilling is a concept where you pass 
    a prop to a component, and that prop won't
    be used in that component. It's purpose
    is just to pass that to another component

    const TopComponent = () => {
    const [state, setState] = useState();
        return (
            <div>
                <MiddleComponent state={state} />
            </div>
        );
    };

    const MiddleComponent = (state) => {
        return (
            <div>
                <BottomComponent state={state} />
            </div>
        );
    };

    const BottomComponent = (state) => {
        return ( <div> {state} </div> );
    };
    
    This becomes eliminated 
    element={<Profile username={username} setUsername={setUsername} />
*/
