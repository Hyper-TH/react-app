import './App.css';
import { useState } from "react";

/* States; Events 2*/
function App() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className='App'>
            <input type="text" onChange={handleInputChange}/>
            {inputValue}
        </div>
    );
}


export default App;