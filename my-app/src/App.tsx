// // import { useState } from 'react'

// import './App.css'
// import Board from './components/Board.tsx'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <Board/>

//   )
// }

// export default App

import { useEffect, useState } from 'react'

import { supabase } from './lib/supabaseClient.ts'
import Board from './components/Board.tsx'
import './App.css'

function App() {

  // start guest session
    const [sessionReady, setSessionReady] = useState(false);

    useEffect(() => {
      async function startSession() {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
          //sign in anonymously with supabase
          const { error: authError } = await supabase.auth.signInAnonymously();
          if (authError) {
            console.error('Error signing in anonymously:', authError);
            return;
          }
        }

        setSessionReady(true);
      }

      startSession();
    }, []);

    if (!sessionReady) {
      return <div>Initializing session...</div>;
    }


  return (

    <ul>

      <Board/>
    </ul>

  )
}

export default App
