import { CollectionConfig } from 'payload/types';
import { ListBlock } from '../blocks/ListBlock';
import { MediaBlock } from '../blocks/MediaBlock';
import { TextBlock } from '../blocks/TextBlock';

export const Posts: CollectionConfig = {
	slug: 'posts',
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
		{
			name: 'excerpt',
			label: 'Excerpt',
			type: 'textarea',
		},
		{
			name: 'date',
			label: 'Publish Date',
			type: 'date',
		},
		{
			name: 'content',
			label: 'Content',
			type: 'blocks',
			required: true,
			blocks: [TextBlock, MediaBlock, ListBlock],
		},
	],
};
