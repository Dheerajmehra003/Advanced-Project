    import React, { useEffect, useState } from 'react'

    const CreateTask = () => {
        
        const [taskTitle, setTaskTitle] = useState('')
        const [taskDescription, setTaskDescription] = useState('')
        const [date, setDate] = useState('')
        const [assignTo, setAssignTo] = useState('')
        const [category, setCategory] = useState('')

        const [task, setTask] = useState({})

        const submitHandler = (e) => {
        e.preventDefault()
        const newTask = {
            taskTitle,
            date,
            assignTo,
            category,
            taskDescription,
            newTask: true,
            acceptedTask: false,
            failed: false,
            completed: false,
        };
        setTask(newTask);
    };

    // Log the task whenever it changes
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(task)
               console.log(elem.tasks)
            }
        })
        localStorage.setItem('employees',JSON.stringify(data))
        setTaskTitle('')
        setDate('')
        setCategory('')
        setAssignTo('')
        setTaskDescription('')
    }, [task]);
    return (
        
        <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex items-start w-full  justify-between  ' >
            <div className='w-1/2 flex flex-col gap-3'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2' value={taskTitle}  onChange={(e)=>{setTaskTitle(e.target.value)}} type="text" placeholder='Enter Task' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2'  value={date}  onChange={(e)=>{setDate(e.target.value)}}  type="date" />
            </div>
            <div >
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2'  value={assignTo}  onChange={(e)=>{setAssignTo(e.target.value)}} type="text" placeholder='Empolyee Name' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2'  value={category}  onChange={(e)=>{setCategory(e.target.value)}} type="text" placeholder='Design, Dev, other..etc' />    
            </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2'  value={taskDescription}  onChange={(e)=>{setTaskDescription(e.target.value)}} name="" id="" cols='30' rows='10'></textarea>
            <button  className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Assign Task</button>
            </div>
        </form>
    </div>
    )
    }

    export default CreateTask