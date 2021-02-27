import React, {useEffect, useState } from 'react'
import User from './components/User';

const initial=[
    {nombre:"Juan",apellido:"jimenes",ciudad:"ciudad de mexico",edad:25,id:0,},
    {nombre:"Jose",apellido:"martinez",ciudad:"la plata",edad:20,id:1,},
    {nombre:"Mario",apellido:"Rodriguez",ciudad:"Miranda",edad:30,id:2,}
]
const initialForm={
    nombre:"",
    apellido:"",
    ciudad:"",
    edad:""
}
const ReactCrud = () => {
    const [user,setUser]=useState(initial);
    const [form,setForm]=useState(initialForm);    
    const [error,setError]=useState("");
    const [editId,setEditId]=useState("");

    const obtenerDatos=(e)=>{
        editId===""
            ?setForm({...form,[e.target.name]:e.target.value,id:user.length})
            :setForm({...form,[e.target.name]:e.target.value,id:editId});
    }
    const enviarDatos=(e)=>{
        e.preventDefault();
        
        if(isNaN(form?.edad)||form?.edad===""||form?.nombre===""||form?.apellido===""||form?.ciudad===""){
            isNaN(form?.edad)
            ?setError('La edad debe ser un numero')
            :setError('Los campos deben ser rellenados')
            setTimeout(()=>{
                setError("");
            },5000)
            
        }else {
            
            setUser([...user,form,]);
            setForm(initialForm)
        }
        setEditId("");
        
    }
    useEffect(()=>{
        
        deleteUser(editId);
        // eslint-disable-next-line
    },[editId]);
    
    const deleteUser=(id)=>{
        
        setUser(user.filter((i)=>i.id!==id))
    }
    
    const editUser=(user)=>{
        setEditId(user.id);
        setForm(user);
    }
    return (
        <div className="h-screen overflow-hidden">
            <header className="px-5 bg-gradient-to-r from-green-400 to-cyan-500">
                <h1 className="text-5xl  py-5 text-white">
                    React crud
                </h1>    
            </header>    
            <div className="flex h-full flex-col sm:flex-row">
                <aside className="sm:w-1/5 bg-gray-700">
                    <form className="mx-4 py-4 flex flex-col ">
                        <label className="text-white ">Nombre:</label>
                        <input type="text" value={form.nombre} name="nombre" onChange={(e)=>obtenerDatos(e)} className="focus:outline-none rounded focus:ring-2 focus:ring-green-300"/>
                        <label className="text-white">Apellido:</label>
                        <input type="text" value={form.apellido} name="apellido" onChange={(e)=>obtenerDatos(e)} className="focus:outline-none rounded focus:ring-2 focus:ring-green-300"/>
                        <label className="text-white">Ciudad:</label>
                        <input type="text" value={form.ciudad} name="ciudad" onChange={(e)=>obtenerDatos(e)} className="focus:outline-none rounded focus:ring-2 focus:ring-green-300"/>
                        <label className="text-white">Edad:</label>
                        <input type="text" value={form.edad} name="edad" onChange={(e)=>obtenerDatos(e)} className="focus:outline-none rounded focus:ring-2 focus:ring-green-300"/>  
                        <input type="submit" value="Agregar" onClick={(e)=>enviarDatos(e)} className="mt-3 py-1 focus:outline-none cursor-pointer hover:from-green-300 text-white bg-gradient-to-r from-green-400 to-cyan-500 hover:to-cyan-400"/>  
                    </form>
                    {error!==""&&<p className="bg-red-400 mx-4 mb-2 py-1 text-white box-border px-2">
                        {error}
                        
                    </p>}
                </aside>
                <div className="w-full h-full">
                    <h1 className="text-center text-4xl mt-5">Detalles de usarios</h1>
                    <section className="border">
                    <div className="w-full py-2 flex px-2 bg-gradient-to-r from-green-400 to-cyan-500 text-white">
                        <div className="w-1/3 flex-grow text-xs sm:text-lg">Nombre</div> 
                        <div className="w-1/3 flex-grow text-xs sm:text-lg">Apellido</div>
                        <div className="w-1/3 flex-grow text-xs sm:text-lg">Ciudad</div>
                        <div className="w-1/5 flex-grow text-xs sm:text-lg">Edad</div> 
                        <button className="invisible">Eliminar</button>
                        <button className="invisible">Edit</button>   
                    </div>
                        {user.map((usuario)=> {
                            return <User key={usuario.id} user={usuario} borrar={deleteUser} editUser={editUser}/>
                        })}
                    </section>
                </div>        
            </div>
        </div>
    )
}

export default ReactCrud;
