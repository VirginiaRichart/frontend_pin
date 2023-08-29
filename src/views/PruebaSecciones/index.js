import PruebaAcordeon from "./componentes/PruebaAcordeon";
import PruebaCarrusel from "./componentes/PruebaCarrusel";
import PruebaCarruselDeTexto from "./componentes/PruebaCarruselDeTexto";
import PruebaDamian from "./componentes/PruebaDamian";
import PruebaFormulario from "./componentes/PruebaFormulario";
import PruebaNavbar from "./componentes/PruebaNavbar";
import PruebaPieDePagina from "./componentes/PruebaPieDePagina";
import PruebaSec from "./componentes/PruebaSec"
import PruebaTextoCentrado from "./componentes/PruebaTextoCentrado";

function PruebaSecciones() {
    return (
        <>
            <PruebaNavbar />
            <PruebaCarrusel/>
            <PruebaTextoCentrado/>
            <PruebaCarruselDeTexto/>
            <PruebaAcordeon/>
            <PruebaFormulario/>
            <PruebaPieDePagina/>
            
            


        </>
    )
}

export default PruebaSecciones;