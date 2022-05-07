import { useQuery } from '../hooks/useQuery';
import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from '../components/Search';

export function HomePage() {
	const query = useQuery();
	const search = query.get('search');

	return (
		<>
			<Search />
			<MoviesGrid key={search} search={search} />
		</>
	);
}
