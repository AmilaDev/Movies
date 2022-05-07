import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { MovieDetails } from '../pages/MovieDetails';
import styles from './App.module.css';

export function App() {
	return (
		<BrowserRouter>
			<header>
				<Link to='/'>
					<h1 className={styles.title}>Movies</h1>
				</Link>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/movie/:movieId' element={<MovieDetails />} />
					<Route path='*' element={<Navigate replace to='/' />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
