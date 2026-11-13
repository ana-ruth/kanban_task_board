import { supabase } from './lib/supabaseClient.ts'


// INSERT task  function
export async function insert(){

    const {data, error} = await supabase
        .from('Tasks').insert({title: "testing !!", status:"in_progress"})

    if (error) {
        console.error(error)
        return null;
    }

    return data;
}

// SELECT task function
export async function select(){
    const {data, error} = await supabase.from("Tasks").select()

    if (error) {
        console.error(error)
        return null;
    }

    return data;
}
