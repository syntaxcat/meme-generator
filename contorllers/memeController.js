'use strict';

function onInit() {
	initGallery();
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
		//1
		ctx.font = `${getMeme().lines[0].size}px IMPACT`;
		var text = getMeme().lines[0].txt;
		ctx.fillStyle = getMeme().lines[0].color;
		ctx.fillText(text, 30, 30);
		//2
		if (getMeme().lines[1]) {
			ctx.font = `${getMeme().lines[1].size}px IMPACT`;
			var secText = getMeme().lines[1].txt;
			ctx.fillStyle = getMeme().lines[1].color;
			ctx.fillText(secText, 30, 480);
		}
	};
	const result = getImgs().find((img) => img.id === getMeme().selectedImgId);
	img.src = result.url;
}

const input = document.querySelector('.input-txt');

input.addEventListener('input', onInputChange);

function onInputChange(ev) {
	setLineTxt(ev.target.value);
	renderMeme();
}

function onTxtColor(val) {
	setColor(val);
	renderMeme();
}

function onSetFontSize(diff) {
	setFontSize(diff);
	renderMeme();
}

function onAddLine() {
	createLine();
	renderMeme();
}

function onSwitchLine() {
	switchLine();
	renderMeme();
}

//NEEDS TO BE DOWNLOADED TO SAVED MEMES
function onDownloadCanvas(elLink) {
	const data = canvas.toDataURL();
	elLink.href = data;
	elLink.download = 'blabla';
}
