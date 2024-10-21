import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='taskList' className='h-[55%]  overflow-x-auto  py-5 w-full mt-10  flex items-center rounded-md justify-start gap-5 flex-nowrap '>
      {data.tasks.map((elem, index)=>{
        if(elem.newTask){
          return <NewTask key={index} data={data} />
        }
        if(elem.acceptedTask) {
          return <AcceptTask key={index} data={data} />
        }
        if(elem.completed) {
          return <CompleteTask key={index} data={data} />
        }
        if(elem.failed) {
          return <FailedTask key={index} data={data} />
        }
      })}
    </div>
  )
}

export default Tasklist