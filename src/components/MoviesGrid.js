import { useState, useEffect } from 'react';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import { Loader } from './Loader';
import { Empty } from './Empty';
import styles from './MoviesGrid.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MoviesGrid({ search }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setLoading(true);
		const searchUrl = search
			? '/search/movie?query=' + search + '&page=' + page
			: '/discover/movie?page=' + page;
		get(searchUrl).then(data => {
			setMovies(prevMovies => prevMovies.concat(data.results));
			setHasMore(data.page < data.total_pages);
			setLoading(false);
		});
	}, [search, page]);

	if (!loading && movies.length === 0) {
		return <Empty />;
	}

	return (
		<InfiniteScroll
			dataLength={movies.length}
			hasMore={hasMore}
			next={() => setPage(prevPage => prevPage + 1)}
			loader={<Loader />}>
			<ul className={styles.moviesGrid}>
				{movies.map(movie => {
					return <MovieCard key={movie.id} movie={movie} />;
				})}
			</ul>
		</InfiniteScroll>
	);
}
