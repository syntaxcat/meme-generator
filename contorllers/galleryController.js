'use strict';

function initGallery() {
	renderGallery();
}

function renderGallery() {
	const imgs = getImgs();
	var strHTML = imgs.map((img) => {
		return `<img class="img" onclick="onImgSelect(${img.id})" src="images/${img.id}.jpg">`;
	});
	document.querySelector('.gallery-container').innerHTML = strHTML.join('');
}

function onImgSelect(imgId) {
	setMeme(imgId);
	renderMeme();
	document.querySelector('.gallery').style.display = 'none';
	document.querySelector('.editor').style.display = 'flex';
	document.querySelector('.input-txt').focus();
}
