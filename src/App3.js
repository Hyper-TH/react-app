import './App.css';

/* Conditional rendering*/
function App() {
    const age = 15;
    const isGreen = true;  

    return (
        <div className='App'>
            {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
            <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>

            {/* && if statement (without else) */}
            {isGreen && <button> THIS IS A BUTTON</button>}

            
        </div>
    );
}



const age = 15;
if (age >= 18) {
    console.log("OVER AGE");
} else {
    console.log("UNDER AGE")
}

// age >= 18 ? console.log("HEHE") : console.log;

export default App;