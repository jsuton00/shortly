import React from 'react';

const ShortenLinkForm = (props) => {
	const {
		urlValue,
		setUrlValue,
		getShortenUrl,
		shortenUrlObject,
		shortenUrlArray,
		setShortenednUrlArray,
	} = props;

	const onChange = (e) => {
		return setUrlValue(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await getShortenUrl(urlValue);

		if (shortenUrlObject) {
			setShortenednUrlArray([...shortenUrlArray, shortenUrlObject]);
		}
	};

	return (
		<form
			name="shorten-link-form"
			onSubmit={onSubmit}
			className="shorten-link-form"
		>
			<div className="shorten-link-form-input-section">
				<input
					type="text"
					placeholder="Shorten a link here..."
					className="shorten-link-form-input"
					onChange={onChange}
					value={urlValue}
				/>
			</div>
			<div className="shorten-link-form-submit-section">
				<button type="submit" className="shorten-link-form-submit">
					Shorten it
				</button>
			</div>
		</form>
	);
};

export default ShortenLinkForm;
