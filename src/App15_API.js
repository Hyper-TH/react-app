import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

/* Fetching data from API-3 Excercise*/
function App() {
    // https://excuser-three.vercel.app/v1/excuse/${category}
    
    const [excuseDetails, setExcuseDetails] = useState("");

    const fetchData = (category) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`)
            .then((res) => {
                setExcuseDetails(res.data[0].excuse);   // Returns an array, hence the [0]
            });
    };

	return (
		<div className="App"> 
            <h1>Generate An Excuse</h1>

            <button onClick={() => fetchData("party")}> Party </button>
            <button onClick={() => fetchData("family")}> Family </button>
            <button onClick={() => fetchData("office")}> Office </button>

            <p> Excuse: {excuseDetails} </p>
		</div>
	);
}

export default App;