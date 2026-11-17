
export default function AddTask({isOpen, onClose, onSave}){
    
    if(!isOpen) return null;

    function handleSubmit(e){
        e.preventDefault();

        //task data from user
        const formData = new FormData(e.target);
        const newTask  = {
            title: formData.get("title"),
            description: formData.get("description"),
            due_date: formData.get("due_date"),
            priority: formData.get("priority"),
            status: formData.get("status") || "todo"
        }

        onSave(newTask);
        onClose(); //close dialog
    }
    
    return(
        <dialog open >

        {/* Get Task data */}

            <form onSubmit={handleSubmit}>

                <h2>Add New Task</h2>

                <label >Title:
                    <input type="text" name="title" required />
                </label>
                <br />

                <label >Description:
                    <input type="text" name="description"/>
                </label>   
                <br /> 

                <label>Due Date:
                    <input type="date" name="due_date" />
                </label> 
                <br />

                <p>Priority</p>
                    <input type="radio" id="low" name="priority" value="low"/>
                    <label htmlFor="low">Low</label><br />

                    <input type="radio" id="normal"  name="priority" value="normal" defaultChecked/>
                    <label htmlFor="normal">Normal</label><br />

                    <input type="radio" id="high" name="priority" value="high"/>
                    <label htmlFor="high">High</label><br />                    

                <br />

                <p>Status</p>
                    <input type="radio" id="todo" name="status" value="todo" defaultChecked/>
                    <label htmlFor="todo">To Do</label><br />

                    <input type="radio" id="in_progress" name="status" value="in_progress"/>
                    <label htmlFor="in_progress">In Progress</label><br />

                    <input type="radio" id="in_review" name="status" value="in_review"/>
                    <label htmlFor="in_review">In Review</label><br />  

                    <input type="radio" id="done" name="status" value="done"/>
                    <label htmlFor="done">Done</label><br />
                    
                <br />
                <button type="submit">Add Task</button>
                <button type="button" onClick={onClose}>Cancel</button>

            </form>
        </dialog>

    )
}