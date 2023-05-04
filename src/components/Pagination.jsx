import { useEffect } from 'react';
import { usePaginate } from '../hooks/usePaginate';

export const Pagination = () => {
	const { page, prevPage, nextPage } = usePaginate(1);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
			});
	}, [page]);

	return (
		<div>
			<h1>{page}</h1>
			<select>
				<option value="10">10</option>
				<option value="10">15</option>
				<option value="10">20</option>
			</select>
			<button onClick={prevPage}>Prev</button>
			<button onClick={nextPage}>Next</button>
		</div>
	);
};
