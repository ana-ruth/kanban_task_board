
import Task from './Task.tsx'

export default function Column({title_status, tasks}){


    return (
        <div className="column" >
            <h2>{title_status}</h2>
            
            {tasks.map(task =>(

                <Task 
                    key = {task.id}
                    id = {task.id}
                    title= {task.title}
                    priority = {task.priority}
                    due_date = {task.due_date}
                    description = {task.description}
                    />
            ))}


        </div>
    )
}