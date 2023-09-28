import './App.css';
import { useState } from "react";

/* States; Events 2*/
function App() {
    const [showText, setShowText] = useState(true);

    return (
        <div className='App'>
            <button 
                onClick={() => {
                    setShowText(!showText);
                }}
            > 
                Show/Hide 
            </button>
            {showText && <h1>Hi I'm Hyper</h1>}
        </div>
    );
}


export default App;