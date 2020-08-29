import React from 'react';

/* styles */

import '../css/User.css';

const User = (user) => {
	const { name, followers, account, image, reposCount } = user;
	const img = require('../assets/images/Octocat.png');

	return (
		<div className="User">
			<div className="img">
				<img src={image} />
			</div>
			<div className="info">
				<h5>Name: {name}</h5>
				<h5>Followers: {followers}</h5>
				<h5>Repository Count: {reposCount}</h5>
				<a href={account} target="_blank">
					Go to profile
				</a>
			</div>
		</div>
	);
};

export default User;
