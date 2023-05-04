import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Users } from './pages/Users';
import { UserDetails } from './pages/UserDetails';

// SPA
// <Routes/> genera un arbol de rutas y a partir de este nos permite reemplazar la vista de cada componente/pagina que coincida con la url del navegador

// <Route /> Representa una ruta en el "arbol" y necesitamos si o si el path (la url del navegador) y el element (componente/pagina)

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/usuarios" element={<Users />} />
					{/* <Route path="/users/:id" element={<UserDetails />} /> */}
					<Route path="/usuarios/:id" element={<UserDetails />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
