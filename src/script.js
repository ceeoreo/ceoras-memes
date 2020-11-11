import Amplify, { Storage } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

// create function for s3 image upload
// should be async

const addNewMeme = (c) => {
	c.preventDefault();
	// stops refresh on submit

	const memeFile = document.getElementById('meme-upload').files[0];
	const memeImg = document.getElementById('memeHere');

	console.log(memeFile);
	//this is the actual uploaded picture
	Storage.put(memeFile.name, memeFile)
	.then((item) => {
		console.log(item);
	})
	// .then(() => {
	// 	const memeURL = Storage.get(res);
	// 	memeImg.src = `${memeURL}`;
	// })
	.catch(err => console.error(err));
	//now image will be in s3 bucket. a promise is used here

	Storage.get(memeFile.name, { download: false })
	.then((res) =>{
		console.log(res);
		memeImg.src = `${res}`;
		console.log(memeImg);
	})
	.catch(err => console.error(err));
}


const memeForm = document.getElementById('add-meme');
memeForm.addEventListener('submit', addNewMeme);