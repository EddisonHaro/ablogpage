//import logo from './logo.svg';
import './App.css';

import Practica2 from './componentes/Practica2';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Los Programadores en el mundo</h1>
     
     
     <Practica2
     nombre='Sarah Chima'
     pais='Nigeria'
     imagen='chatDesk.png'
     cargo='Ingeniera de software'
     empresa='ChatDesk'
     testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble..'
     altfoto='Foto de Sarah'
     />

<Practica2
     nombre='Shawn Wang'
     pais='Singapur'
     imagen='amazon.jpg'
     cargo='Ingeniera de software'
     empresa='Amazon'
     testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
     altfoto='Foto de Shawn'
     />

    <Practica2
     nombre='Emma Bostian'
     pais='Suecia'
     imagen='spotify.png'
     cargo='Ingeniera de software'
     empresa='Spotify'
     testimonio='Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
     altfoto='Foto de Emma'


     />



     </div>
    </div>
  );
}

export default App;
