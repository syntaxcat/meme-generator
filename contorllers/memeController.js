'use strict';

function onInit() {
	renderMeme();
}

function renderMeme() {
	var canvas = document.querySelector('#canvas');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.onload = function() {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.drawImage(img, 0, 0);

		ctx.font = `${getMeme().lines[0].size}px IMPACT`;

		var text = getMeme().lines[0].txt;
		ctx.fillStyle = getMeme().lines[0].color;
		ctx.fillText(text, 30, 30);
	};
	const result = getImgs().find((img) => img.id === getMeme().selectedImgId);
	img.src = result.url;
}

const input = document.querySelector('.input-txt');

input.addEventListener('input', onInputChange);

function onInputChange(ev) {
	updateMemeTxt(ev.target.value);
	// renderMeme();
}
