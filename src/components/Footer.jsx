import React from 'react';
import { WhiteBrandLogo } from './BrandLogo';
import {
	CompanySubNavLinks,
	FeaturesSubNavLinks,
	ResourcesSubNavLinks,
} from './Navbar';
import facebook from '../assets/icons/icon-facebook.svg';
import twitter from '../assets/icons/icon-twitter.svg';
import pinterest from '../assets/icons/icon-pinterest.svg';
import instagram from '../assets/icons/icon-instagram.svg';

const Footer = () => {
	return (
		<footer className="footer container">
			<div className="footer-row">
				<div className="footer-brand-section">
					<WhiteBrandLogo />
				</div>
				<div className="footer-nav-section">
					<ul className="footer-nav-menu">
						<p className="footer-nav-title">Features</p>
						<FeaturesSubNavLinks />
					</ul>
					<ul className="footer-nav-menu">
						<p className="footer-nav-title">Resources</p>
						<ResourcesSubNavLinks />
					</ul>
					<ul className="footer-nav-menu">
						<p className="footer-nav-title">Company</p>
						<CompanySubNavLinks />
					</ul>
				</div>
				<div className="footer-social-section">
					<a
						href="http://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-social-link"
					>
						<div className="footer-social-wrapper">
							<img
								src={facebook}
								alt="Facebook"
								className="footer-social-icon"
							/>
						</div>
					</a>
					<a
						href="http://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-social-link"
					>
						<div className="footer-social-wrapper">
							<img src={twitter} alt="Twitter" className="footer-social-icon" />
						</div>
					</a>
					<a
						href="http://www.pinterest.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-social-link"
					>
						<div className="footer-social-wrapper">
							<img
								src={pinterest}
								alt="Pinterest"
								className="footer-social-icon"
							/>
						</div>
					</a>
					<a
						href="http://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-social-link"
					>
						<div className="footer-social-wrapper">
							<img
								src={instagram}
								alt="Instagram"
								className="footer-social-icon"
							/>
						</div>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
