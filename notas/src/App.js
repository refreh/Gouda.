import './App.css';
import Tarea from './componentes/Tarea.js';

import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="App">
      <h1 className='titulo'>NOTAS</h1>
   <div className='tareas-lista-principal'>
    
    <h1 className='notes'>Mis Notas</h1>
  <ListaDeTareas></ListaDeTareas>
   </div>
    </div>
  );
}

export default App;
