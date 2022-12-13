import React, { useRef } from 'react';

const ShortenLinkList = (props) => {
	const { shortenUrlArray } = props;

	const listItemRef = useRef();

	const onClick = (e) => {
		if (e.target.value === listItemRef.current.value) {
			navigator.clipboard.writeText(e.target.value);
		}
	};
	return (
		<div className="shorten-link-list">
			{shortenUrlArray.length > 0 &&
				shortenUrlArray
					.filter(
						(shortUrl) =>
							shortUrl.fullUrl !== '' || shortUrl.shortenedUrl !== '',
					)
					.map((shortUrl) => {
						return (
							<div
								key={shortUrl.shortenedUrl}
								ref={listItemRef}
								className="shorten-link-list-item"
							>
								<div className="shorten-link-list-item-text-section">
									<p className="full-link">{shortUrl.fullUrl}</p>
									<p className="shorten-link">{shortUrl.shortenedUrl}</p>
								</div>
								<div className="shorten-link-list-item-copy-section">
									<button
										type="button"
										ref={listItemRef}
										className="copy-button"
										onClick={onClick}
										value={shortUrl.shortenedUrl}
									>
										Copy
									</button>
								</div>
							</div>
						);
					})}
		</div>
	);
};

export default ShortenLinkList;
