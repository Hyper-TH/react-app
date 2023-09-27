import './App.css';
import { User } from './User';

/* Lists */
function App() {
    const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"];
    const users = [
        {name: "Hyper", age: 21},
        {name: "Max", age: 25},
        {name: "GB", age: 45}
    ]
    
    return (
        <div className='App'>
            {/* <h1>
                {names.map((name, key) => {
                    return <h1 key={key}>{name}</h1>
                })}
            </h1> */}
            {users.map((user, key) => {
                return ( <User name={user.name} age={user.age} />);
                })
            }

        </div>
    );
}



export default App;