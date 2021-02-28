import React from 'react'

const User = ({user,borrar,editUser}) => {
    const {nombre,apellido,ciudad,edad,id}=user;
    
    return (
        <div className="w-full py-2 border-2 flex px-2 relative">
            <div className="w-1/3 text-xs sm:text-lg">{nombre}</div> 
            <div className="w-1/3 text-xs sm:text-lg">{apellido}</div>
            <div className="w-1/3 text-xs sm:text-lg">{ciudad}</div>
            <div className="w-1/5 text-xs sm:text-lg">{edad}</div> 
            <button className="bg-green-400 h-5 sm:h-full px-2 text-white sm:text-2xl flex-grow text-xs " onClick={()=>editUser(user)}>&#9842;</button>  
            <button className="bg-red-400 h-5 sm:h-full  text-white px-2 sm:text-2xl ml-1 flex-grow text-xs " onClick={()=>borrar(id)}>&#9747;</button> 
        </div>
    )
}

export default User
