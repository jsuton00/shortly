import React from 'react';
import logo from '../assets/imgs/logo.svg';
import whiteLogo from '../assets/imgs/whiteLogo.svg';

export const BrandLogo = () => {
	return <img src={logo} alt="Shortly logo" className="brand-image" />;
};

export const WhiteBrandLogo = () => {
	return <img src={whiteLogo} alt="Shortly logo" className="brand-image" />;
};
