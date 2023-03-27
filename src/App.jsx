
import './App.css'
import Home from './Component/Home';
import Date from './date/Date.json';
import Temas from './Component/Temas'

function App() {

  let temas = Date;
  
  return (
    <div className="App">
      <Home >
        {temas.map(tema => 
          <Temas titulo={tema.titulo} imagen={tema.imagen} descripcion={tema.descripcion} duracion={tema.duracion} clasificacion={tema.clasificacion} estreno={tema.estreno} director={tema.director} actores={tema.actores} anio={tema.anio} />
        )}
      </Home>
    </div>
  )
}

export default App
