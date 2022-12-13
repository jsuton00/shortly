import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { HeaderAuth, HeaderNavbar } from './Navbar';

const Header = () => {
	return (
		<header className="header">
			<div className="header-row container">
				<div className="header-navbar-section">
					<Link to="/" className="header-navbar-brand-link">
						<div className="header-navbar-brand">
							<BrandLogo />
						</div>
					</Link>
					<HeaderNavbar />
				</div>
				<div className="header-auth-section">
					<HeaderAuth />
				</div>
			</div>
		</header>
	);
};

export default Header;
