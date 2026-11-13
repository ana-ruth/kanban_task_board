
export default function Task({id, title, priority, due_date, description}){


    return (
        <div className="column" >
            <h3>{title}</h3>
            <h4>{priority}</h4>
            <h5>{due_date}</h5>
            <p>{description}</p>
        </div>
    )
}