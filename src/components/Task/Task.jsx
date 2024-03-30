import "./Task.css"

function Task({
    title, 
    completed, 
    task_id, 
    handleToggle,
    handleDelete
}){
    return(
        <div 
            className="todo-container" 
            style={{
                backgroundColor: completed ? "rgb(128, 227, 128)" : "rgb(198, 196, 196)"
            }}
        >
            <div style={{
                display: "flex", 
                gap:"10px"
            }}>
                <input 
                    type="checkbox" 
                    onChange={()=> handleToggle(task_id)} 
                />
                {completed ? 
                    <del>
                        <p>{title}</p>
                    </del> : <p>{title}</p>
                }

                <button 
                    className="del-btn"
                    onClick={() => handleDelete(task_id)}
                >
                    X
                </button>
                
            </div>
        </div>
    )
}

export default Task;