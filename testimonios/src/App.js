import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>

        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
        name='Emma Bostian'
        pais='Suecia'
        imagen='persona3'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify'
         />

         <Testimonio
        name='Shawn Wang'
        pais='Singapur'
        imagen='persona1'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida '
         />

         <Testimonio
        name='Sara Chima'
        pais='Nigeria'
        imagen='persona2'
        cargo='Ingeniero de Software'
        empresa='ChatDesk'
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'
         />

      </div>
    </div>
  );
}

export default App;
