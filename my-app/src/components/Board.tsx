import './Board.css'
import Column from './Column.tsx'
import {insert, select, update} from '../database.ts'
import AddTask from './AddTask.tsx'
import {DragDropProvider} from '@dnd-kit/react';

import {useEffect, useState} from 'react'

function Board(){

    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)

    //function to load tasks from supabase
    async function loadTasks(){
        let data = await select();
        console.log(data);
        
        if (data) setTasks(data);
    }

    // inital tasks load
    useEffect(()=>{
        loadTasks();
    }, []);

    //open dialog to add tasks
    function addTaskBtn(){
        setIsModalOpen(true);
    }

    //insert task to database and reload tasks
    async function handleSaveTask(taskData){
        await insert(taskData);
        loadTasks();
    }

    // separate tasks based on status
    const todo = tasks.filter(task => task.status === "todo");
    const in_progress = tasks.filter(task => task.status === "in_progress");
    const in_review = tasks.filter(task => task.status === "in_review");
    const done = tasks.filter(task => task.status === "done");


    //funcion to handle drag and drop event
    async function handleDragEnd(event:any){
        if (event.canceled) return;

        //source (Task), target(Column)
        const {source, target} = event.operation;
        if(!source || !target) return;

        const taskId = source.id;
        const newStatus = String(target.id);

        //get task
        const task = tasks.find(t => t.id === taskId);
        if(!task || task.status === newStatus) return;

        const previous = tasks;

        //update tasks
        setTasks(prev =>
            prev.map(t => (t.id === taskId ? { ...t, status: newStatus } : t))
        );

        //update task in supabase with new status
        const success = await update(newStatus, taskId);

        // undo if update failed
        if (success == false){
            console.error("Failed to update task status")
            setTasks(previous);
        }
        
    }


    return (

        < DragDropProvider onDragEnd={handleDragEnd}>

            <div className="board" >
                <div className = 'top-board'>

                    <h2>Task View</h2>

                    <button id = 'addTask' onClick={addTaskBtn}>+ New Task</button>                
                </div>

                {/* Dialog AddTask component */}
                <AddTask
                    isOpen = {isModalOpen}
                    onClose={()=>setIsModalOpen(false)}
                    onSave={handleSaveTask}
                />


                {/* Columns */}
                <div className='columns'>
                    <Column id='todo' title_status='TO DO' tasks = {todo}/>
                    <Column id='in_progress' title_status='IN PROGRESS' tasks = {in_progress}/>
                    <Column id='in_review' title_status='IN REVIEW' tasks = {in_review}/>
                    <Column id='done' title_status='DONE' tasks = {done}/>                
                </div>


            </div>

        </DragDropProvider>
    )
}

export default Board