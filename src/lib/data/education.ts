import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Stedelijk Gymnasium Leiden',
		description: '',
		location: 'Netherlands, Leiden',
		logo: Assets.Unknown,
		name: '',
		organization: 'SGL',
		period: { from: new Date(2013, 8, 1), to: new Date(2020, 8, 1) },
		shortDescription: '',
		slug: 'Highschool',
		subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Greek', 'Dutch', 'English',  'Art', 'Music', 'Philosophy']
	},
	{
		degree: 'Bachleor of AI',
		description: '',
		location: 'Netherlands, Utrecht',
		logo: Assets.Unknown,
		name: '',
		organization: 'University Utrecht',
		period: { from: new Date(2020, 0, 1), to: new Date(2025, 8, 1)  },
		shortDescription: '',
		slug: 'Uni',
		subjects: ['C#', 'Python', 'Computer Architecture', 'Algorithms and Data structures', 'adaptive systems', 'computatinal langauge', 'models for language processing', 'computational intelligence', 'productsoftware']
	},
	{
		degree: 'Exchange Taiwan',
		description: '',
		location: 'Taiwan, Taipei',
		logo: Assets.Unknown,
		name: '',
		organization: 'University Utrecht',
		period: { from: new Date(2023, 2, 1), to: new Date(2023, 8, 1)  },
		shortDescription: '',
		slug: 'Exchange',
		subjects: ['Investment', 'Social media marketing', 'Universalism in East-Asia','Chinese', 'Exploring Taiwan (culture/nature)', ] 
	}
];

const EducationData = { title, items };

export default EducationData;
