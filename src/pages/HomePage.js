import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from '../components/Search';

export function HomePage() {
	return (
		<>
			<Search />
			<MoviesGrid />
		</>
	);
}
