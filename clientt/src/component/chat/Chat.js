import React,{useEffect,useState} from 'react'
import './Chat.css'
import queryString from 'query-string'
import io from 'socket.io-client'
//location the props
export const Chat = ({qs}) => {
  //run when thr function renders
  useEffect(()=>{
    const {name,room}=queryString.parse()
    console.log(name,room)
  })
  return (
    <div>Chat</div>
  )
}
