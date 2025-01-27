import React from 'react'
import { useState } from 'react'
function App() {
  const [name, setName] = useState('')

  const [description, setDescription] = useState('')
  // console.log(name,description);
const[tasks, setTasks] = useState([{}]);
  const handleSubmit=(e)=>{
    e.preventDefault()
   setTasks([...tasks, {name, description}]);
    console.log(tasks);
  }
  return (
    <>
    <div>To do app bana diya behenchod</div>
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='task name' />
        <input  onChange={(e)=>setDescription(e.target.value)} type="text" placeholder='description'  />
        <button>
          create task
        </button>
      </form>
    
    </div>
    <div>
      ny
      {tasks.map((a)=>(
        <div>
          cdce
          <p>{a.name}</p>
          <p>{a.description}</p>
        </div>
      )
    )}
    </div>
    </>
    
  )
}

export default App