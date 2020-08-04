import React,{useContext,useState,useEffect} from 'react';
import {SmurfContext} from './context';
export default function Form() {
 const [data,setData,postSmurf]=useContext(SmurfContext);//we SHOULD put data here,even it will not show
 const [smurf,setSmurf]=useState({
     name:'',
     age:'',
     height:'',
     id:Date.now()
    })
 const handleChange = (e)=>{
   setSmurf({...smurf,[e.target.name]:e.target.value})
 }
    return (
        <div>
        <form onSubmit={()=>postSmurf(smurf)}>
            <input type ='text'name='name' placeholder='name' value={smurf.name} onChange={handleChange}/>
            <input type ='text'name='age' placeholder='age' value={smurf.age} onChange={handleChange}/> 
            <input type ='text'name='height'placeholder='height' value={smurf.height} onChange={handleChange}/>           
            <button>FETCH</button>
        </form>
        </div>
    )
}
