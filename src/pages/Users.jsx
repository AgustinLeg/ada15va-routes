import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Users = () => {
	const [data, setData] = useState([]);

	console.log('renderizo users');

	useEffect(() => {
		fetch('https://6434178b1c5ed06c958eea0e.mockapi.io/users')
			.then((resp) => resp.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className="user-list">
			{data.map((user) => (
				<div key={user.id} style={{ display: 'flex' }}>
					<p>{user.name}</p>
					<Link to={`/usuarios/${user.id}`}>ver detalles</Link>
				</div>
			))}
		</div>
	);
};
