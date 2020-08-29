import React from 'react';

/* styles */

import '../css/User.css';

const User = (user) => {
	const { name, followers, account, image, reposCount } = user;
	return (
		<div className="User">
			<div className="img">
				<img src={image} alt="User picture" />
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
