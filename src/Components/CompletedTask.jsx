import React from 'react'

function CompletedTask({toDos}) {
  return (
    <div className='todo-main'>
       <h1>Completed Task</h1>
     <div>
        {toDos.map((obj, index)=>{
          if(obj.status){
            return(<div key={index}><h1>{obj.text}</h1></div>
            )
          }
          return null
         })}    
     </div>
    </div>
  )
}

export default CompletedTask