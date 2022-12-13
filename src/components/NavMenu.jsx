import React from 'react';
import { HeaderAuth, HeaderNavbar } from './Navbar';

const NavMenu = (props) => {
	const { handleClose } = props;
	return (
		<div className="nav-modal container">
			<div className="nav-menu-wrapper container">
				<div className="nav-menu">
					<HeaderNavbar handleClose={handleClose} />
					<div className="nav-menu-auth-links">
						<HeaderAuth handleClose={handleClose} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavMenu;
