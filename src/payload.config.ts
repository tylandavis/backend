import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import { Navigation } from './globals/Navigation';
import { Users } from './collections/Users';
import { Pages } from './collections/Pages';
import { Media } from './collections/Media';
import { Work } from './collections/Work';
import { Posts } from './collections/Posts';

import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

const adapter = s3Adapter({
	config: {
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY_ID,
			secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
		},
		region: process.env.S3_REGION,
		endpoint: process.env.S3_ENDPOINT,
	},
	bucket: process.env.S3_BUCKET,
	acl: 'public-read',
});

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	globals: [Navigation],
	collections: [Users, Pages, Posts, Work, Media],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [
		cloudStorage({
			collections: {
				media: {
					adapter: adapter,
					prefix: 'media',
					generateFileURL: (file) => {
						return `${process.env.CONTENT_URL}/media/${file.filename}`;
					},
				},
			},
		}),
	],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
	cors: ['https://tylandavis.com'],
});
