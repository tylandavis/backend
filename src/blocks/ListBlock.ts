import { Block } from 'payload/types';

export const ListBlock: Block = {
	slug: 'listBlock',
	interfaceName: 'ListBlock',
	labels: {
		singular: 'List Block',
		plural: 'List Blocks',
	},
	fields: [
		{
			name: 'label',
			label: 'Label',
			type: 'text',
		},
		{
			name: 'listType',
			label: 'List Type',
			type: 'select',
			options: [
				{
					label: 'Work',
					value: 'work',
				},
				{
					label: 'Posts',
					value: 'posts',
				},
				{
					label: 'Links',
					value: 'links',
				},
			],
		},
		{
			name: 'projects',
			label: 'Projects',
			type: 'relationship',
			relationTo: 'work',
			admin: {
				condition: ({ siblingData }) => siblingData.listType === 'work',
			},
		},
		{
			name: 'posts',
			label: 'Posts',
			type: 'relationship',
			relationTo: 'posts',
			admin: {
				condition: ({ siblingData }) => siblingData.listType === 'posts',
			},
		},
		{
			name: 'links',
			label: 'Links',
			type: 'array',
			labels: {
				singular: 'Link',
				plural: 'Link',
			},
			minRows: 1,
			admin: {
				condition: ({ siblingData }) => siblingData.listType === 'links',
			},
			fields: [
				{
					name: 'label',
					label: 'Label',
					type: 'text',
				},
				{
					name: 'link',
					label: 'Link',
					type: 'group',
					fields: [
						{
							name: 'linkType',
							label: 'Link Type',
							type: 'select',
							options: [
								{
									label: 'Internal',
									value: 'internal',
								},
								{
									label: 'External',
									value: 'external',
								},
							],
						},
						{
							name: 'internalLink',
							label: 'Internal Link',
							type: 'relationship',
							relationTo: 'pages',
							admin: {
								condition: ({ siblingData }) =>
									siblingData.linkType === 'internal',
							},
						},
						{
							name: 'externalLink',
							label: 'External Link',
							type: 'text',
							admin: {
								condition: ({ siblingData }) =>
									siblingData.linkType === 'external',
							},
						},
						{
							name: 'newTab',
							label: 'Open in new tab',
							type: 'checkbox',
						},
					],
				},
			],
		},
	],
};
