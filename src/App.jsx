
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
import Division from './Component/Division';
import Fracciones from './Component/Fracciones';
import Conjunto from './Component/Conjunto';
import Error from './Component/Error';


function App() {
  return (
    <>
			<Routes>
        <Route path='/aprende-conmigo/' element={<Home />} />
        <Route path='/aprende-conmigo/suma' element={<Suma />} />
        <Route path='/aprende-conmigo/resta' element={<Resta />} />
        <Route path='/aprende-conmigo/multiplicacion' element={<Multiplicacion />} />
        <Route path='/aprende-conmigo/division' element={<Division />} />
        <Route path='/aprende-conmigo/fracciones' element={<Fracciones />} />
        <Route path='/aprende-conmigo/conjunto' element={<Conjunto />} />
				<Route path='/aprende-conmigo/quizz' element={<HomePage />} />
        <Route path='/aprende-conmigo/team' element={<Team />} />
        <Route path='/aprende-conmigo/triki' element={<Triki />} />
        <Route path='/aprende-conmigo/*' element={<Error />} />
				<Route
					path='/category/:category'
					element={<CategoryPage />}
				/>
			</Routes>
		</>
  );
}

export default App
