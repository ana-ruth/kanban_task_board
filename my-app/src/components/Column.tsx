
import Task from './Task.tsx'
import {useDroppable} from '@dnd-kit/react'

export default function Column({id, title_status, tasks}){
       
    // too make columns droppable
    const {isDropTarget, ref} = useDroppable({
        id:id,
     });

    return (
        <div className="column" ref={ref}>
            <h2>{title_status}</h2>

            {isDropTarget ? 'Draggable element is over me' : 'Drag something over me'}

            
            {/* populate column with tasks */}
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