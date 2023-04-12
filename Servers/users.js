//helper function that will be use in index.js
const users=[]
const adduser=({id,name,user})=>{
    name=name.trim().toLowerCse();
    room=room.trim().toLowerCse();
    const existinguser=users.find((user)=>user.room===room&&user.name===name)
    if(existinguser){
        return {error:'user name is taken'}
    }
    const user={id,name,room}
    users.push(user)
    return {user}
}
const removeuser=(id)=>{
    const index=users.findIndex((user)=>user.id==id)
    if(index!==-1){
       return users.splice(index,1)[0] 
    }

}
const getuser=(id)=>users.find((user)=>user.id===id)


const getuserinroom=(room)=>users.filter((user)=>user.room===rom)

module.exports={adduser,removeuser,getuser,getuserinroom}

