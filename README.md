# image2text
Image2Text identifies, classifies and labels video and images for newsrooms. Powered by computer vision models, it recognizes objects and people in video, images and infographics, and labels specific contexts in Spanish and English through natural language. The tool seeks to promote better data governance by including perspectives from the Global South.

The deployments scripts follow the format used for the serverless (https://www.serverless.com/) deployment convention which automatically deploys the config/codes to aws

Train and Recognize are "event APIs" which are triggered whenever a S3 Bucket upload is performed. GetResults is a http invoked api to get the results based on the JobID returned from the Recognize API.
