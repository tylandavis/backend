import { Block } from 'payload/types';

export const TextBlock: Block = {
	slug: 'textBlock',
	interfaceName: 'TextBlock',
	labels: {
		singular: 'Text Block',
		plural: 'Text Blocks',
	},
	fields: [
		{
			name: 'label',
			label: 'Label',
			type: 'text',
		},
		{
			name: 'Text',
			label: 'Text',
			type: 'richText',
			required: true,
		},
	],
};
