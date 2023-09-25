import './style.css'

function Form(props) {
    return (
        <>
            <section className='contenedor-section' id="contacto">
                <form onSubmit={props.handleSubmit} className='formulario'>
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="correo"
                            aria-describedby="emailHelp"
                            onChange={props.handleChange}
                            value={props.newUser.correo}
                        />
                        <div id="emailHelp" className="form-text">
                            Nunca compartiremos su correo electrónico con nadie.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            aria-describedby="emailHelp"
                            onChange={props.handleChange}
                            value={props.newUser.nombre}
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">
                            Apellido
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            aria-describedby="emailHelp"
                            onChange={props.handleChange}
                            value={props.newUser.apellido}
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="mensajeCorreo" className="form-label">
                            Mensaje
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="mensajeCorreo"
                            aria-describedby="emailHelp"
                            onChange={props.handleChange}
                            value={props.newUser.mensajeCorreo}
                        />

                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            onChange={props.handleCheck}
                            checked={props.newUser.notification}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Enviarme novedades al email.</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={props.disableSubmit}>
                        Enviar
                    </button>
                </form>
                {props.success &&
                    <div className="alert alert-success m-3" role="alert">
                        ¡Tu solicitud fue recibida con exito!
                    </div>}
                {props.error &&
                    <div className="alert alert-danger m-3" role="alert">
                        ¡Tuvimos un problema al procesar tu solicitud!
                    </div>}

                <div className="img-fluid imagen">
                    
                </div>
            </section>
        </>
    )
}

export default Form;