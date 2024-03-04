import { CollectionConfig } from 'payload/types';
import { TextBlock } from '../blocks/TextBlock';
import { MediaBlock } from '../blocks/MediaBlock';
import { ListBlock } from '../blocks/ListBlock';

export const Pages: CollectionConfig = {
	slug: 'pages',
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			label: 'Description',
			type: 'textarea',
			required: true,
		},
		{
			name: 'slug',
			label: 'Slug',
			type: 'text',
			required: true,
		},
		{
			name: 'content',
			label: 'Content',
			type: 'blocks',
			blocks: [TextBlock, MediaBlock, ListBlock],
			required: true,
		},
	],
};
