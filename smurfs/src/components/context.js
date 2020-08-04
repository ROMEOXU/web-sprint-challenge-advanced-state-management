import React, {createContext,useEffect,useState} from "react";
import axios from 'axios';
export const SmurfContext = createContext();


export const SmurfProvider =(props)=>{
const [data,setData]=useState([]);
    useEffect(()=>{
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res=>{console.log('axios',res);
     setData(res.data)})
    .catch(err=>console.log('get bad'))
},[]);
const postSmurf = (item)=>{
   
        axios
        .post(`http://localhost:3333/smurfs`,item)
        .then(res=>console.log('post',res))
        .catch(err=>console.log('post bad'))
    
};
const deleteSmurf = (smurfsId)=>{
    axios
    .delete(`http://localhost:3333/smurfs/${smurfsId}`)
    .then(res=>console.log('delete',smurfsId))
    .catch(err=>console.log('delete bad'))

};

return (
    <SmurfContext.Provider value={[data,setData,postSmurf,deleteSmurf]}>{props.children}</SmurfContext.Provider>
)
}