import {useDraggable} from '@dnd-kit/react'

export default function Task({id, title, priority, due_date, description}){

    // to make task draggable
    const {ref} = useDraggable({
        id: id,
    })

    return (
        <div className="task" ref = {ref}>
            <h3>{title}</h3>
            <h4>{priority}</h4>
            <h5>{due_date}</h5>
            <p>{description}</p>
        </div>
    )
}