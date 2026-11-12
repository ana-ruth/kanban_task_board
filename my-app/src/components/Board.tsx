import './Board.css'
import Column from './Column.tsx'
import Task from './Task.tsx'
import { supabase } from '../lib/supabaseClient'

import {useEffect, useState} from 'react'

function Board(){

    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        async function loadTasks(){
            const {data, error} = await supabase.from('Tasks').select('*');
            if (data) setTasks(data);
        }
        loadTasks();
    }, []);


    // const data = await supabase
    // .from('Tasks').select()


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