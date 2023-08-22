import Acordeon from "./views/Acordeon";
import Carrusel from "./views/Carrusel";
import CarruselDeTexto from "./views/CarruselDeTexto";
import Formulario from "./views/Formulario";
import Navbar from "./views/Navbar";
import PieDePagina from "./views/PieDePagina";
import PruebaSecciones from "./views/PruebaSecciones";
import PruebaDamian from "./views/PruebaSecciones/componentes/PruebaDamian";
import TextoCentrado from "./views/TextoCentrado";


function App() {
  return (
    <>
    
      <Navbar/>
      <Carrusel/>
      <TextoCentrado/>
      <CarruselDeTexto/>
      <Acordeon/>
      <Formulario/>
      <PieDePagina/>
      
    </>
    
    );
}

export default App;
