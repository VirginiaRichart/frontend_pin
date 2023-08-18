import './style.css'

function PruebaCarruselDeTexto(props) {
    return (
        <>
            {/*<div className="contenedorCarruselDeTexto p-3 mb-2 text-white z-0">.bg-primary</div>

                <div className="subseccion-imagen z-1">
                    <p>seccion de la imagen</p>
                </div>

                <div className="subseccion-carruselDeTexto z-2 bg-primary" >
                    <p>seccion del carrusel</p>
    </div>*/}

            <div className='contebedor-base'>

                <div className="contenedor-padre">

                    <div className="div-superpuesto div1">

                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    {/*<img src="..." className="d-block w-100" alt="..." />*/}
                                    <h3>AVENTUA</h3>
                                    <p>Embárcate en una emocionante odisea llena de desafíos y descubrimientos.</p>
                                </div>
                                <div className="carousel-item">
                                    {/*<img src="..." className="d-block w-100" alt="..." />*/}
                                    <h3>HISTORIAS</h3>
                                    <p>Sumérgete en un mundo de historias cautivadoras que te transportarán a épocas pasadas y mundos imaginarios.</p>
                                </div>
                                <div className="carousel-item">
                                    {/*<img src="..." className="d-block w-100" alt="..." />*/}
                                    <h3>PASION</h3>
                                    <p>Enamorados de cada destino, respiramos la pasión por viajar.</p>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default PruebaCarruselDeTexto;