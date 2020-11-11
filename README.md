# Ceora's Memes

## Overview

This is a platform that I'll be using to upload my memes to an S3 bucket with AWS. I used HTML/CSS and JavaScript. I also used Amplify for this project since it allows for a seamless experience with AWS hosting and resources.

## Tools and Languages Used

- HTML/CSS
- JavaScript
- AWS Amplify
- Parcel

## Steps

1. Begin project setup with Parcel and Babel installation, `npm init`, and `amplify init`.
2. Use amplify to add authentication and s3 storage for web app. It's better to add storage through amplify than to use existing bucket.
3. Create Basic HTML page setup
4. Add JavaScript functionality that grabs image uploaded through form and places it in designated s3 bucket.
5. Add CSS styles for responsive page

## Mile Stones

- Make sure to install `npm i aws-amplify` since this is different from `npm i amplify`. This will affect how the project runs.
- When adding storage, make sure to allow guest create/update otherwise viewing in parcel won't allow you to upload.
- Don't use pre-existing s3. This just makes life hard tbh.
- Make sure to `.gitignore` the `.cache`file.

## Next Steps

- Create meme API with Amplify and GraphQL
- Attach API to DynamoDB database
- Allow users to see all uploaded files in s3
- Create search functionality that displays memes based on key word search
- Instead of search, possibly categorize memes
- Display image on upload
- Add alt text descriptor field for images that are uploaded

## Resources

- [Amplify Docs](https://docs.amplify.aws/cli/start/install)
- [Ali Spittel Blog: S3]
- [Ali Spittel Blog: FullStack with ]
- [Amplify Docs: Downloading files from S3](https://docs.amplify.aws/lib/storage/download/q/platform/js#file-download-option)