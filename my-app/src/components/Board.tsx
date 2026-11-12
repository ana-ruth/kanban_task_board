import './Board.css'
import Column from './Column.tsx'
import Task from './Task.tsx'
import { supabase } from '../lib/supabaseClient'
import {insert} from '../database.ts'

import {useEffect, useState} from 'react'

function Board(){

    function addTaskBtn(){
        alert("Button was clicked");
        insert();
    }


    return (
        <div className="board" >
            <div className = 'top-board'>
                <h2>Board</h2>

                <button id = 'addTask' onClick={addTaskBtn}>Add Task +</button>                
            </div>


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