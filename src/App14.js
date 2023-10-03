import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

/* Fetching data from API-2*/
function App() {

    const [name, setName] = useState("");
    const [details, setDetails] = useState({});

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => {
                setDetails(res.data);
            });
    };

	return (
		<div className="App"> 
            <input 
                placeholder="Ex. Hyper..." 
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <button onClick={fetchData}>
                Predict Age
            </button>

            {/* ? indicates to only access object if its not null */}
            <h1>Name: {details?.name}</h1>
            <h1>Predicted Age: {details?.age}</h1>
            <h1>Count: {details?.count}</h1>
		</div>
	);
}


export default App;