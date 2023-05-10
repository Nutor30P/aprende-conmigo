
import './App.css'
import Home from './Component/Home';
import Suma from './Component/Suma'
import Team from './Component/Team'
import Triki from './Component/Triki'
import { HomePage } from './Component/Quiz-App-con-React/src/pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import {  CategoryPage } from './Component/Quiz-App-con-React/src/pages/CategoryPage';
import Resta from './Component/Resta'
import Multiplicacion from './Component/Multiplicacion';


function App() {
  return (
    <>
			<Routes>
        <Route path='/aprende-conmigo/' element={<Home />} />
        <Route path='/aprende-conmigo/suma' element={<Suma />} />
        <Route path='/aprende-conmigo/resta' element={<Resta />} />
        <Route path='/aprende-conmigo/multiplicacion' element={<Multiplicacion />} />
				<Route path='/aprende-conmigo/quizz' element={<HomePage />} />
        <Route path='/aprende-conmigo/team' element={<Team />} />
        <Route path='/aprende-conmigo/triki' element={<Triki />} />
				<Route
					path='/category/:category'
					element={<CategoryPage />}
				/>
			</Routes>
		</>
  );
}

export default App
