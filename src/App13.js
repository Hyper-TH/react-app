import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

/* Fetching data from API */
function App() {

    // Fetch data from an API 
    // fetch("https://catfact.ninja/fact")
    // .then((res) => res.json())  // Convert into JSON
    // .then((data) => {           // Grab that value and call it data 
    //     console.log(data)       
    // });

    const [catFact, setCatFact] = useState("");

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    };
    // Run only when the component mounts
    useEffect(() => {
        fetchCatFact();
    }, []);
    

	return (
		<div className="App"> 
            <button onClick={fetchCatFact}>
                Generate Cat Fact
            </button>
            <p> {catFact} </p>
		</div>
	);
}


export default App;