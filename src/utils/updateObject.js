export const updateObject = (oldObject, newProperties) => ({
	...oldObject,
	...newProperties,
});

export const urlObject = {
	fullUrl: '',
	shortenedUrl: '',
};
