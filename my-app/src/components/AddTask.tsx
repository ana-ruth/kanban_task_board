import type { SubmitEvent } from 'react'
import type { NewTask, TaskPriority, TaskStatus } from '../types.ts'

type AddTaskProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (task: NewTask) => void;
};

export default function AddTask({isOpen, onClose, onSave}: AddTaskProps){

    if(!isOpen) return null;

    function handleSubmit(e: SubmitEvent<HTMLFormElement>){
        e.preventDefault();

        //task data from user
        const formData = new FormData(e.currentTarget);
        const newTask: NewTask = {
            title: String(formData.get("title") ?? ""),
            description: String(formData.get("description") ?? ""),
            due_date: (formData.get("due_date") as string) || null,
            priority: (formData.get("priority") as TaskPriority) || "normal",
            status: (formData.get("status") as TaskStatus) || "todo"
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