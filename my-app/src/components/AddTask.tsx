
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
                <p>Add task details and organize your project.</p>

                <div className="title-div">
                    <label >Title </label>
                        <input type="text" name="title" required />                   
                </div>                    

                <div className="description-div">
                    <label >Description </label>  
                        <input type="text" name="description"/>                    
                </div>

                <div className="date-priority">

                    <div className="dueDate-div">
                        <label>Due Date </label>  
                            <input type="date" name="due_date" />                        
                    </div>


                    <div className="priority-div">
                        <label> Priority </label>  

                            <div className="priority-options">
                                <div>
                                    <input type="radio" id="low" name="priority" value="low"/>
                                    <label htmlFor="low">Low</label><br />                                    
                                </div>

                                <div>
                                    <input type="radio" id="normal"  name="priority" value="normal" defaultChecked/>
                                    <label htmlFor="normal">Normal</label><br />                                    
                                </div>

                                <div>
                                    <input type="radio" id="high" name="priority" value="high"/>
                                    <label htmlFor="high">High</label><br />                                     
                                </div>
                                 
                            </div>
                 
                    </div>                    
                </div>


                <div className="status-div">
                    <label>Status</label>  
                    <div className="status-options">

                        <div>
                            <input type="radio" id="todo" name="status" value="todo" defaultChecked/>
                            <label htmlFor="todo">To Do</label><br />                           
                        </div>

                        <div>
                            <input type="radio" id="in_progress" name="status" value="in_progress"/>
                            <label htmlFor="in_progress">In Progress</label><br />                            
                        </div>

                        <div>
                            <input type="radio" id="in_review" name="status" value="in_review"/>
                            <label htmlFor="in_review">In Review</label><br />                              
                        </div>

                        <div>
                            <input type="radio" id="done" name="status" value="done"/>
                            <label htmlFor="done">Done</label><br />                            
                        </div>

                    </div>


                </div>
                

                <div className="buttons-div">
                    <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>                    
                    <button type="submit">Add Task</button>
                </div>


            </form>
        </dialog>

    )
}