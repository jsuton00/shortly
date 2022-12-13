import React from 'react';
import { useNavigate } from 'react-router';

const GetStartedButton = () => {
	const navigate = useNavigate();

	const onClick = () => {
		return navigate('/signup');
	};
	return (
		<button type="button" onClick={onClick} className="boost-links-button">
			Get Started
		</button>
	);
};

export default GetStartedButton;
