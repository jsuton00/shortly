import React, { useEffect, useState } from 'react';
import { getShortUrl } from '../apis/api';
import AdvancedStatistics from '../components/AdvancedStatistics';
import GetStartedButton from '../components/GetStartedButton';
import ShortenLinkForm from '../components/ShortenLinkForm';
import ShortenLinkList from '../components/ShortenLinkList';
import { urlObject } from '../utils/updateObject';

const HomePage = () => {
	const [urlValue, setUrlValue] = useState('');
	const [shortenUrl, setShortenUrl] = useState('');
	const [shortenUrlObject, setShortenedUrlObject] = useState(urlObject);
	const [shortenUrlArray, setShortenednUrlArray] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const getShortenUrl = async (url) => {
		try {
			let response;
			setIsLoading(true);

			if (url) {
				response = await getShortUrl(url);
			}

			setShortenUrl(response.data?.result.short_link);
			setIsLoading(false);
		} catch (err) {
			setIsError(true);
			console.log(err.message);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (urlValue && shortenUrl) {
				setShortenedUrlObject({
					fullUrl: urlValue,
					shortenedUrl: shortenUrl,
				});
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [shortenUrl, urlValue]);

	console.log(shortenUrl);

	return (
		<div className="home-page container">
			<div className="home-page-hero-section">
				<div className="home-page-hero-section-text">
					<h1 className="home-page-hero-section-title">
						More than just shorter links
					</h1>
					<p className="home-page-hero-section-description">
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>
					<GetStartedButton />
				</div>
			</div>
			<div className="home-page-form-section">
				<ShortenLinkForm
					urlValue={urlValue}
					setUrlValue={setUrlValue}
					getShortenUrl={getShortenUrl}
					shortenUrlObject={shortenUrlObject}
					shortenUrlArray={shortenUrlArray}
					setShortenednUrlArray={setShortenednUrlArray}
				/>
			</div>
			{shortenUrlArray.length > 0 && (
				<ShortenLinkList shortenUrlArray={shortenUrlArray} />
			)}
			<div className="advanced-stats-section">
				<h3 className="advanced-stats-section-title">Advanced Statistics</h3>
				<p className="advanced-stats-section-description">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
				<AdvancedStatistics />
			</div>
			<div className="boost-links-section">
				<h3 className="boost-links-section-title">Boost your links today</h3>
				<GetStartedButton />
			</div>
		</div>
	);
};

export default HomePage;
