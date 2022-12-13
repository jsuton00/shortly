import axios from 'axios';

export const getShortUrl = async (url) => {
	return await axios.get(
		`https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`,
	);
};
