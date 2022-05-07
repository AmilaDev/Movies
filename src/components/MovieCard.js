import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export function MovieCard({ movie }) {
	const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

	return (
		<li className={styles.movieCard}>
			<Link to={'/movie/' + movie.id}>
				<img
					className={styles.movieImg}
					height={345}
					width={230}
					src={imageUrl}
					alt={movie.title}></img>
				<div>{movie.title}</div>
			</Link>
		</li>
	);
}
