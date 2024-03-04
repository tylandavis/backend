import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
	slug: 'media',
	upload: {
		adminThumbnail: 'thumbnail',
		imageSizes: [
			{
				name: 'full',
				width: 1440,
			},
			{
				name: 'mobile',
				width: 720,
			},
			{
				name: 'thumbnail',
				width: 180,
				height: 180,
				position: 'center',
			},
		],
	},
	fields: [
		{
			name: 'alt',
			label: 'Alt Text',
			type: 'text',
		},
	],
};
