
import './App.css'
import Home from './Component/Home';
import { Routes, Route} from 'react-router-dom';
import Contenido from './Component/Contenido'
import Suma from './Component/Suma'
import Team from './Component/Team'
import Triki from './Component/Triki'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/aprende-conmigo/" element={<Home/>}/>
        <Route path="/aprende-conmigo/team" element={<Team />}/>
        <Route path="/aprende-conmigo/suma" element={<Suma/>}/>
        <Route path="/aprende-conmigo/triki" element={<Triki />}/>
        <Route path="*" element={"Error 404"}/>
      </Routes>
    </div>
  );
}

export default App
