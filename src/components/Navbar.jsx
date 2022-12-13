import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	FEATURES_SUB_NAV_LINKS,
	RESOURCES_SUB_NAV_LINKS,
	COMPANY_SUB_NAV_LINKS,
	HEADER_NAV_LINKS,
} from '../constants/navlinks';

export const HeaderNavbar = (props) => {
	const { handleClose } = props;

	const onClick = () => {
		return handleClose();
	};
	return (
		<div className="header-navbar">
			{HEADER_NAV_LINKS.length > 0 &&
				HEADER_NAV_LINKS.map((link) => {
					return (
						<Link
							key={link}
							to={link}
							onClick={onClick}
							className="header-navbar-nav-item-link"
						>
							<div className="header-navbar-nav-item">
								<p className="header-navbar-nav-item-text">{link}</p>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export const HeaderAuth = (props) => {
	const { handleClose } = props;
	const navigate = useNavigate();

	const onClickLogin = () => {
		navigate('/login');
		handleClose();
	};

	const onClickSignUp = () => {
		navigate('/signup');
		handleClose();
	};
	return (
		<>
			<button
				type="button"
				onClick={onClickLogin}
				className="header-auth-button header-login"
			>
				Login
			</button>
			<button
				type="button"
				onClick={onClickSignUp}
				className="header-auth-button header-signup"
			>
				Sign up
			</button>
		</>
	);
};

export const FeaturesSubNavLinks = () => {
	return (
		<>
			{FEATURES_SUB_NAV_LINKS.length > 0 &&
				FEATURES_SUB_NAV_LINKS.map((link) => {
					return (
						<Link
							key={link}
							to={link.split(' ').join('-')}
							className="footer-nav-menu-nav-item-link"
						>
							<li className="footer-nav-menu-nav-item">
								<p className="footer-nav-menu-nav-item-title">{link}</p>
							</li>
						</Link>
					);
				})}
		</>
	);
};

export const ResourcesSubNavLinks = () => {
	return (
		<>
			{RESOURCES_SUB_NAV_LINKS.length > 0 &&
				RESOURCES_SUB_NAV_LINKS.map((link) => {
					return (
						<Link
							key={link}
							to={link}
							className="footer-nav-menu-nav-item-link"
						>
							<li className="footer-nav-menu-nav-item">
								<p className="footer-nav-menu-nav-item-title">{link}</p>
							</li>
						</Link>
					);
				})}
		</>
	);
};

export const CompanySubNavLinks = () => {
	return (
		<>
			{COMPANY_SUB_NAV_LINKS.length > 0 &&
				COMPANY_SUB_NAV_LINKS.map((link) => {
					return (
						<Link
							key={link}
							to={link.split(' ').join('-')}
							className="footer-nav-menu-nav-item-link"
						>
							<li className="footer-nav-menu-nav-item">
								<p className="footer-nav-menu-nav-item-title">{link}</p>
							</li>
						</Link>
					);
				})}
		</>
	);
};
