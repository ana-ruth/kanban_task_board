import { supabase } from './lib/supabaseClient.ts'


// insert task  function
export async function insert(){

    const {data, error} = await supabase
        .from('Tasks').insert({title: "testing task button again"})

    if (error) {
        console.error(error)
        return null;
    }

    return data;
}
