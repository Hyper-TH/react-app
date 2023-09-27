import './App.css';

function App() {
  return (
    <div className="App"> 
      {/*Call component*/}
      {/* <User name="Hyper" age={21} email="hyper@hyper.com"/>
      <User name="Max" age={21} email="max@max.com"/>

      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
     */}
      <h1 className="name">Hyper</h1>
    </div>
  );
}

// JS Function
// Returns primitive JS type
// const getName = () => {
//   return "Hyper";
// };

// React component
// Always return UI stuff (must be capitalized)
const GetNameComponent = () => {
  return <h1>Hyper</h1>;
};

/*
const props = {
  name: "Pedro",
  age: 21,
  email: "hyper@hyper.com"
}
*/
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}

export default App;
