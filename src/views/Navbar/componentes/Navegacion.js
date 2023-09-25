import './style.css'

function Navegacion(props) {
    return (
        <>

            <nav className="navbar">
                <div className="logo">

                    <a href="#">
                        <img src="./logoDamiansinfondo.png" alt="Logo de Mi Empresa"/>
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#destinos">Destinos</a></li>
                    <li><a href="#tours">Tours</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>


        </>
    )
}

export default Navegacion;