import {useDraggable} from '@dnd-kit/react'
import type { TaskData } from '../types.ts'

type TaskProps = Pick<TaskData, "id" | "title" | "priority" | "due_date" | "description">;

export default function Task({id, title, priority, due_date, description}: TaskProps){

    // to make task draggable
    const {ref} = useDraggable({
        id: id,
    })

    return (
        <div className="task" ref = {ref}>
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="taskInfo">
                <p>{due_date}</p> 
                <p
                    className={`priority-dot priority-${priority}`}
                    title={`${priority} priority`}
                    aria-label={`${priority} priority`}
                ></p>
            </div>
        
        </div>
    )
}