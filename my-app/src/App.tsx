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
  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    getInstruments()
  }, [])


  async function getInstruments() {
    const { data, error } = await supabase.from('instruments').select()

    if (error) {
      console.error(error)
      return
    }

    setInstruments(data)
  }

  return (

    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.id}>{instrument.name}</li>
      ))}


      <Board/>
    </ul>

  )
}

export default App
