import "./TaskInput.css"
function TaskInput({
    handleAddTodo
}){
    return(
        <div className="input-container">
            <h1 className="heading">Add your Todos</h1>
            <form onSubmit={(e)=>handleAddTodo(e)}>
                <input 
                    type="text" 
                    className="input-field"
                    placeholder="Add Todo"
                />
                <button 
                    className="input-button"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}
export default TaskInput;