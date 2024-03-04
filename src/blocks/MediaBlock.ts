import { Block } from 'payload/types';

export const MediaBlock: Block = {
	slug: 'mediaBlock',
	labels: {
		singular: 'Media Block',
		plural: 'Media Blocks',
	},
	fields: [
		{
			name: 'media',
			label: 'Media',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'caption',
			label: 'Caption',
			type: 'text',
		},
	],
};
