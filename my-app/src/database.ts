import { supabase } from './lib/supabaseClient.ts'


// INSERT task  function
export async function insert(taskData){

    const {data, error} = await supabase
        .from('Tasks').insert({
                            title: taskData.title, 
                            description: taskData.description,
                            due_date: taskData.due_date,
                            priority: taskData.priority,
                            status: taskData.status
        })

    if (error) {
        console.error("Error inserting task: ",error);
        return null;
    }

    return data;
}

// SELECT task function
export async function select(){
    const {data, error} = await supabase.from("Tasks").select()

    if (error) {
        console.error("Error selecting tasks: ",error);
        return null;
    }

    return data;
}

//UPDATE status for task
export async function update(new_status, task_id){

    const {error} = await supabase.from('Tasks').update({status:new_status}).eq('id',task_id);
    
    if (error) {
        console.error("Update failed: ", error);
        return false
    }

    return true;
    
}