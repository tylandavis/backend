import { GlobalConfig } from 'payload/types';

export const Navigation: GlobalConfig = {
	slug: 'navigation',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'pages',
			label: 'Pages',
			type: 'array',
			fields: [
				{
					name: 'page',
					label: 'Page',
					type: 'relationship',
					relationTo: 'pages',
				},
			],
		},
	],
};
