import React, { useState } from 'react'
import Navbar from '../component/navbar';


const Home = () => {
  const [name,setname]=useState("");
  const[submit,setsubmitted]=useState(false);

  const handlesubmit=()=>{
       setsubmitted(true);
    
  }
  return (
    <div>
        <div className='flex-1/6 h-full w-full justify-center items-center'>
             <form  className='flex flex-col' action="">
             <label htmlFor="">Enter Name</label>
              <input className='border-1' type="text" 
               value={name}
               onChange={(e)=>setname(e.target.value)}
              />
              <br />
             <label htmlFor="">Enter Age</label>
              <input className='border-2' type="text" />
              <button className='bg-amber-500'
              type="button" onClick={handlesubmit}>Submit</button>
             </form>
             {submit && <h1>name:{name}</h1>}
        </div>
    </div>
  )
}

export default Home