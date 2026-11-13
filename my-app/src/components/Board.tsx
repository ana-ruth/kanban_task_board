import './Board.css'
import Column from './Column.tsx'
import Task from './Task.tsx'
import { supabase } from '../lib/supabaseClient'
import {insert, select} from '../database.ts'

import {useEffect, useState} from 'react'

function Board(){

    const [tasks, setTasks] = useState([]);

    //function to load tasks
    async function loadTasks(){
        let data = await select();
        console.log(data);
        
        if (data) setTasks(data);
    }

    // inital tasks load
    useEffect(()=>{
        loadTasks();
    }, []);

    function addTaskBtn(){
        alert("Button was clicked");
        insert();
        loadTasks();
    }


    // separate tasks based on status
    const todo = tasks.filter(task => task.status === "todo");
    const in_progress = tasks.filter(task => task.status === "in_progress");
    const in_review = tasks.filter(task => task.status === "in_review");
    const done = tasks.filter(task => task.status === "done");


    return (
        <div className="board" >
            <div className = 'top-board'>
                <h2>Board</h2>

                <button id = 'addTask' onClick={addTaskBtn}>Add Task +</button>                
            </div>


            <div className='columns'>
                <Column title_status='To Do' tasks = {todo}/>
                <Column title_status='In Progress' tasks = {in_progress}/>
                <Column title_status='In Review' tasks = {in_review}/>
                <Column title_status='Done' tasks = {done}/>                
            </div>


        </div>
    )
}

export default Board