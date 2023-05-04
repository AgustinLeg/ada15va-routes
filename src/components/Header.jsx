import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="header">
			<h1>15va</h1>
			<nav>
				{/* <Link to="/">Inicio</Link> */}
				{/* <Link to="/login">Iniciar Sesion</Link> */}
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					Inicio
				</NavLink>
				<NavLink
					to="/usuarios"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					Usuarios
				</NavLink>
				<NavLink
					to="/login"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					Iniciar Sesion
				</NavLink>
			</nav>
		</header>
	);
};

{
	/* <a href="/">Inicio</a>
<a href="/login">Iniciar Sesion</a> */
}
