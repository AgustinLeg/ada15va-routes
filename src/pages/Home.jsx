import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to="/login">Ir a la pagina login</Link>
		</div>
	);
};
export default Home;
