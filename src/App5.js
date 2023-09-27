import './App.css';
import { Planet } from './Planet';

/* App4 Excercise */
function App() {
    const planets = [
        { name: "Mars", isGasPlanet: false},
        { name: "Earth", isGasPlanet: false},
        { name: "Jupiter", isGasPlanet: false},
        { name: "Venus", isGasPlanet: false},
        { name: "Neptune", isGasPlanet: true},
        { name: "Uranus", isGasPlanet: true}
    ]
    
    return (
        <div className='App'>
            {planets.map((planets, key) => {
                return ( planets.isGasPlanet && <Planet name={planets.name} />);
                })
            }
        </div>
    );
}

export default App;