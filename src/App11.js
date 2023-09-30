import './App.css';
import { useState } from "react";
import { Task } from './Task';

/* CRUD to-do list */
function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        // Reference what changed when the event is triggered/what's inside the text
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        };

        setTodoList([...todoList, task]);
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };

    const updateTask = (id) => {
        setTodoList(todoList.map((task) => {
            if (task.id === id) {
                return {...task, completed: true};
            } else {
                return task;
            }
        }))
        // numbers.map((number) => number * 2);
    };

    return (
        <div className='App'>
            <div className='addTask'>
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}> Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return( 
                        <Task 
                            taskName={task.taskName} 
                            id={task.id} 
                            completed={task.completed}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                        />
                    );
                })}
            </div>
        </div>
    );
}


export default App;