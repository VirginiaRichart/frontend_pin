import './style.css'

function CarruselComponente(props) {
    return (
        <>

            <section className="seccion-Carrusel mx-auto p-2">
                
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./damian1.jpeg" className="d-block w-100" alt="La falda" />
                            <div className="carousel-caption d-none d-md-block">
                                {/*<h5>CASCADAS QUE ENAMORAN</h5>
                                <p>Déjate cautivar por la melodía relajante del agua que cae en armonía con la naturaleza circundante.</p>*/}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./damian1-1.jpg" className="d-block w-100" alt="Sierras" />
                            <div className="carousel-caption d-none d-md-block">
                                {/*<h5>MONTAÑAS MAJESTUOSAS</h5>
                                <p>"Adéntrate en el reino de las montañas, donde la grandeza de la naturaleza alcanza nuevas alturas</p>*/}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./damian3.jpeg" className="d-block w-100" alt="mendoza" />
                            <div className="carousel-caption d-none d-md-block">
                                {/*<h5>TIERRAS DEL BUEN VINO</h5>
                                <p>La vid, un enigma viviente que nos brinda la magia del vino. 
                            </p>*/}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </section>


        </>
    )
}

export default CarruselComponente;