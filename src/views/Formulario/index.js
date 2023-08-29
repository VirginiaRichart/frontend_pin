import { useState } from "react";
import Form from "./componentes/Form"
import axios from "axios";

function Formulario(){

    const [newUser,setNewUser] = useState({nombre: "", apellido: "", correo: "", mensajeCorreo:"",  notification: false})

    const [success, setSuccess] = useState(false)

    const [error, setError] = useState(false)

    const disableSubmit = !newUser.nombre || !newUser.apellido || !newUser.correo || !newUser.mensajeCorreo

    const handleChange = (event)=>{
        const property = event.target.id
        const value = event.target.value
        setNewUser({...newUser, [property]: value})
        if(success) setSuccess(false)
    }

    
    const handleCheck = (event)=>{
        setNewUser({...newUser, notification: event.target.checked})
    }

    
    const handleSubmit = (event)=>{
        event.preventDefault()
        axios
            /*method: "POST",
        url: "http://localhost/backend_pin/public/index.php/api/registrar-cliente"*/
        .post("http://localhost/backend_pin/public/index.php/api/registrar-cliente",newUser)
        .then(
            response => {
                setSuccess(true)
                setNewUser({nombre: "", apellido: "", correo: "", mensajeCorreo:"", notification: false})
            }
        ).catch(
            error=>{
                setError(error)
            }
        )
    }

    return(
        <Form 
            newUser={newUser} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            handleCheck={handleCheck} 
            disableSubmit={disableSubmit}
            success={success}
            error={error}
        />
    )
}

export default Formulario;