import './style.css'

function PruebaNavbar(props) {
    return (
        <>

            <nav className="navbar">
                <div className="logo">

                    <a href="#">
                        <img src="./logo3.jpg" alt="Logo de Mi Empresa"/>
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Destinos</a></li>
                    <li><a href="#">Tours</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>


        </>
    )
}

export default PruebaNavbar;