import React from 'react'

export default function SmurfListItem(props) {
    return (
        <div>
           <li>{props.item.name} </li>
           <li>{props.item.age} </li>
           <li>{props.item.height} </li>
           <button onClick={(e)=>{e.preventDefault();
               props.deleteSmurf(props.item.id)}}>remove</button>
        </div>
    )
}
