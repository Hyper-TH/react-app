import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './Navbar';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';

/* React Query */
function App() {   
    // Default options:
    // queries: CRUD
    // modify: CUD
    const client = new QueryClient({defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,    // Switch tab does not refetch data
        }
    }}); 
    return (
        <div className='App'>
            <QueryClientProvider client={client}>
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
            </QueryClientProvider>
        </div>
    );
}
export default App;
