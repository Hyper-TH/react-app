import './App.css';
import { useState } from "react";

/* States; Events 3*/
function App() {
    const [textColor, setTextColor] = useState("black");

    return (
        <div className='App'>
            <button 
                onClick={() => {
                    setTextColor(textColor === "black" ? "red" : "black");
                }}
            > 
                Show/Hide 
            </button>
            <h1 style={{color: textColor}}>Hi I'm Hyper</h1>
        </div>
    );
}


export default App;