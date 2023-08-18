import './style.css'

function AcordeonComponente(props) {
    return (
        <>
            <div className='contenedor-Base-acordeon'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Destinos Exóticos
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Descubre los destinos más <strong>exóticos</strong> y <strong>emocionantes</strong> que tenemos para ofrecerte. Desde playas paradisíacas hasta selvas misteriosas, te llevaremos a lugares que te dejarán sin aliento.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Experiencias Culturales
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Sumérgete en las <strong>culturas y tradiciones</strong> locales de los lugares que visitamos. Desde festivales vibrantes hasta talleres artesanales, te ofrecemos experiencias auténticas y enriquecedoras.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Aventuras en la Naturaleza
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                ¿Eres un amante de la <strong>naturaleza y la aventura</strong>? Nuestros tours te llevarán a través de rutas escénicas, senderos desafiantes y paisajes impresionantes que te conectarán con el mundo natural.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AcordeonComponente;