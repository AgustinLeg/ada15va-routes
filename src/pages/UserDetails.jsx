import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const UserDetails = () => {
	const { id } = useParams();
	const [user, setUser] = useState({});

	useEffect(() => {
		fetch(`https://6434178b1c5ed06c958eea0e.mockapi.io/users/${id}`)
			.then((resp) => resp.json())
			.then((data) => setUser(data));
	}, [id]);

	return (
		<div>
			<Link to="/usuarios">Volver</Link>
			<h1>{id}</h1>
			<h2>{user.name}</h2>
			<img src={user.image} alt={user.name} />
		</div>
	);
};
