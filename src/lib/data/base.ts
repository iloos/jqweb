const firstName = 'Jiaqi';
const lastName = 'Chen';
const suffix = 'WIP portfolio website with Svelte 5';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
