import './style.css'

function PieDePaginaComponente(props) {
    return (
        <>

            <div className="contenedor-padre-pieDePagina">

                <footer className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Contacto</h4>
                                <p>Correo: contacto@singer.com</p>
                                <p>Teléfono: +123456789</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Enlaces</h4>
                                <a href="#">Inicio</a><br />
                                <a href="#">Servicios</a><br />
                                <a href="#">Productos</a><br />
                                <a href="#">Blog</a>
                            </div>
                            <div className="col-md-4">
                                <h4>Redes Sociales</h4>
                                <a href="#">Facebook</a><br />
                                <a href="#">Twitter</a><br />
                                <a href="#">Instagram</a>
                            </div>
                        </div>
                        <hr />
                        <p>&copy; 2023 Singer. Todos los derechos reservados.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default PieDePaginaComponente;