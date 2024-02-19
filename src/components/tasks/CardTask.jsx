

export default function CardTask (props) {
    
    const task = props.task;
    
    return (
        <>
        <div className="card"> 
            <div className="taskcontainer">
                <h3>{task.name}</h3>
                <p>{task.dificulty}</p>
                <p>{task.locality}</p>
                <p>{task.urgency}</p>
            </div>
            <div className="buttons">
                <button onClick={() => props.deleteTask(task) }> Delete </button>
            </div>
        </div>
        </>
    )
}
