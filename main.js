'use strict';

function onInit() {
	initGallery();
	openGallery();
}

function openGallery() {
	document.querySelector('.editor').style.display = 'none';
	document.querySelector('.saved-memes').style.display = 'none';
	document.querySelector('.about').style.display = 'none';
	document.querySelector('.gallery').style.display = 'block';
}

function openSavedMemes() {
	document.querySelector('.editor').style.display = 'none';
	document.querySelector('.gallery').style.display = 'none';
	document.querySelector('.about').style.display = 'none';
	document.querySelector('.saved-memes').style.display = 'block';
}

function openAboutPage() {
	document.querySelector('.editor').style.display = 'none';
	document.querySelector('.gallery').style.display = 'none';
	document.querySelector('.saved-memes').style.display = 'none';
	document.querySelector('.about').style.display = 'flex';
}
