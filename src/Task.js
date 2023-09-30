export const Task = (props) => {
    return (
        <div className="task">
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}> Delete </button>
            <button onClick={() => props.updateTask(props.id)} style={{color: (props.completed) ? "red" : "green"}}> Complete </button>
        </div>
    );
};