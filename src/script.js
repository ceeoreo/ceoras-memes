import Amplify, { Storage } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

// create function for s3 image upload
// should be async

const addNewMeme = (c) => {
	c.preventDefault();
	// stops refresh on submit

	const memeFile = document.getElementById('meme-upload').files[0];
	console.log(memeFile);
	//this is the actual uploaded picture
	Storage.put(memeFile.name, memeFile)
	.then((item) => {
		console.log(item);
	})
	.catch(err => console.error(err));

	//now image will be in s3 bucket. a promise is used here
}

const memeForm = document.getElementById('add-meme');
memeForm.addEventListener('submit', addNewMeme);