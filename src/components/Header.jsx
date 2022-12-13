import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { HeaderAuth, HeaderNavbar } from './Navbar';
import NavMenu from './NavMenu';
import ToggleButton from './ToggleButton';

const Header = (props) => {
	const { width, isOpen, handleToggle, handleClose } = props;

	return (
		<header className="header">
			<div className="header-row container">
				<div className="header-navbar-section">
					<Link to="/" className="header-navbar-brand-link">
						<div className="header-navbar-brand">
							<BrandLogo />
						</div>
					</Link>
					{width < 768 ? <></> : <HeaderNavbar />}
				</div>
				<div className="header-auth-section">
					{width < 768 ? (
						<ToggleButton isOpen={isOpen} handleToggle={handleToggle} />
					) : (
						<HeaderAuth />
					)}
				</div>
			</div>
			{isOpen && <NavMenu handleClose={handleClose} />}
		</header>
	);
};

export default Header;
