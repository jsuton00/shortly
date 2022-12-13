import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AnalyticsPage from './pages/AnalyticsPage';
import BlogPage from './pages/BlogPage';
import BrandedLinksPage from './pages/BrandedLinksPage';
import DevelopersPage from './pages/DevelopersPage';
import FeaturesPage from './pages/FeaturesPage';
import HomePage from './pages/HomePage';
import LinkShorteningPage from './pages/LinkShorteningPage';
import LoginPage from './pages/LoginPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import SignUpPage from './pages/SignUpPage';
import SupportPage from './pages/SupportPage';

const App = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/features" element={<FeaturesPage />} />
					<Route path="/pricing" element={<PricingPage />} />
					<Route path="/resources" element={<ResourcesPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="/features/link-shortening"
						element={<LinkShorteningPage />}
					/>
					<Route
						path="/features/branded-links"
						element={<BrandedLinksPage />}
					/>
					<Route path="/features/analytics" element={<AnalyticsPage />} />
					<Route path="/resources/blog" element={<BlogPage />} />
					<Route path="/resources/developers" element={<DevelopersPage />} />
					<Route path="/resources/support" element={<SupportPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
