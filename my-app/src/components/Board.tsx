import './Board.css'
import Column from './Column.tsx'
import Task from './Task.tsx'

function Board(){


    return (
        <div className="board" >
            <h2>Board</h2>

            <div className='columns'>
                <Column title_status='To Do'
                    
                />


                <Column title_status='In Progress'/>
                <Column title_status='In Review'/>
                <Column title_status='Done'/>                
            </div>


        </div>
    )
}

export default Board