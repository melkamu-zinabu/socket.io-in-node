import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Join.css'
export const Join = () => {
    const[name,setName]=useState("")
    const[room,setRoom]=useState("")

  return (
    <div joinOuterContainer>
        <div className='joinIneerContainer'>
            <h1 className='heading'>
                Join
            </h1>
            <div>
            <input placeholder='name' className='joinInput' type='text' onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div>
            <input placeholder='room' className='joinInput mt-20' type='text' onChange={(event)=>setRoom(event.target.value)}/>
            </div>
            {/* PREVENT DEFAULT() PREVENT BUTTON CLICK */}
            {/* to kemilew ketlo chat start with small letter alebeleziya betam aschegrognal even route gar kalew gar temesasay bihon enquan */}
            <Link onClick={event=>(!name||!room) ? event.preventDefault():null} to={`/chat? name=${name}&room=${room}`}>
            <button className='button mt-20' type='submmit'>signin</button>
            </Link>
        </div>
    </div>
  )
}
    <div></div>