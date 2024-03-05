import { CollectionConfig } from 'payload/types';

export const Work: CollectionConfig = {
	slug: 'work',
	versions: {
		drafts: true,
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
		{
			name: 'tagline',
			label: 'Description',
			type: 'text',
			required: true,
		},
		{
			name: 'image',
			label: 'Image',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
	],
};
