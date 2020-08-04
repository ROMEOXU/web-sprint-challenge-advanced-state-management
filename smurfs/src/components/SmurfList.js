import React,{useContext} from 'react';
import {SmurfContext} from './context';
import SmurfListItem from './SmurfListItem';
export default function SmurfList() {
 const [data,setData,postSmurf,deleteSmurf]= useContext(SmurfContext);
    return (
        <div>
            {data.map((e,index)=>(<div key={index}><SmurfListItem item={e} deleteSmurf={deleteSmurf}/></div> ))}
        </div>
    )
}