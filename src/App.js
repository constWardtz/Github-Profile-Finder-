import React, { useState, useEffect } from 'react';

/* Components */
import User from './components/User';

/* Styles */
import './css/App.css';

const App = () => {
	const [ user, setUser ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('constWardtz');

	useEffect(
		() => {
			getUser();
		},
		[ query ]
	);

	const getUser = async () => {
		const response = await fetch(`https://api.github.com/users/${query.toLowerCase().trim()}`);
		const data = await response.json();

		// const { name, followers, html_url, avatar_url, public_repos, repos_url } = data;
		setUser(data);
	};

	const handleOnChange = (e) => {
		const { value } = e.target;
		setSearch(value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<form onSubmit={handleOnSubmit} className="form">
				<h1>Github Profile Finder</h1>
				<input
					type="text"
					value={search}
					name={search}
					onChange={handleOnChange}
					placeholder="Enter Github Username.."
				/>
				<button type="submit">Search</button>
			</form>
			<User
				name={user['name']}
				followers={user['followers']}
				account={user['html_url']}
				image={user['avatar_url']}
				reposCount={user['public_repos']}
			/>
		</div>
	);
};

export default App;
