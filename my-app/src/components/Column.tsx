
import Task from './Task.tsx'

export default function Column({title_status}){


    return (
        <div className="column" >
            <h2>{title_status}</h2>

            {/* sample task
            <Task 
                title="Task1" 
                status = "in_progress"
                priority = "low"
                due_date = ""
                description ="complete this task soon"
             /> */}
        </div>
    )
}