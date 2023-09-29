import './App.css';
import { useState } from "react";

/* States; Events Excercise*/
function App() {
    const [count, setCount] = useState(0);

    const increaseNum = () => {
        setCount(count + 1);
    };
    const decreaseNum = () => {
        setCount(count - 1);
    };
    const resetNum = () => {
        setCount(0);
    };

    return (
        <div className='App'>
            {count}
            <button onClick={increaseNum}>Increase</button>
            <button onClick={decreaseNum}>Decrease</button>
            <button onClick={resetNum}>Set to Zero</button>
        </div>
    );
}


export default App;