'use strict';

function renderMeme() {
	var canvas = document.querySelector('#canvas');
	var ctx = canvas.getContext('2d');
	let x;

	var img = new Image();
	img.onload = function() {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.drawImage(img, 0, 0);
		//1
		ctx.font = `${getMeme().lines[0].size}px IMPACT`;
		var text = getMeme().lines[0].txt;
		ctx.fillStyle = getMeme().lines[0].color;

		ctx.textAlign = getMeme().lines[0].align;

		if (ctx.textAlign === 'center') {
			x = canvas.width / 2;
		} else if (ctx.textAlign === 'left') {
			x = 20;
		} else {
			x = canvas.width - 20;
		}
		ctx.fillText(text, x, 60);
		ctx.strokeText(text, x, 60);

		//2
		if (getMeme().lines[1]) {
			ctx.font = `${getMeme().lines[1].size}px IMPACT`;
			var secText = getMeme().lines[1].txt;
			ctx.fillStyle = getMeme().lines[1].color;
			ctx.textAlign = getMeme().lines[1].align;

			if (ctx.textAlign === 'center') {
				x = canvas.width / 2;
			} else if (ctx.textAlign === 'left') {
				x = 20;
			} else {
				x = canvas.width - 20;
			}
			ctx.fillText(secText, x, 480);
			ctx.strokeText(secText, x, 480);
		}
	};
	const result = getImgs().find((img) => img.id === getMeme().selectedImgId);
	img.src = result.url;
}

var inputColor = document.querySelector('.color');

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
	input.focus();
	input.value = '';
	createLine();
	renderMeme();
}

function onDeleteLine() {
	input.focus();
	deleteLine();
	input.value = getCurrLine().txt;
	inputColor.value = getCurrLine().color;
	renderMeme();
}

//TODO: FIX SWITCH(IF THERE IS NO ADDED LINE BEFORE-IT CANNOT SWITCH)
function onSwitchLine() {
	input.focus();
	switchLine();
	var currLine = getCurrLine();
	input.value = currLine.txt;
	inputColor.value = currLine.color;
	renderMeme();
}

function toggleMenu() {
	document.body.classList.toggle('menu-open');
}

function onDownloadCanvas(elLink) {
	const data = canvas.toDataURL();
	elLink.href = data;
	elLink.download = 'blabla';
}

function showColorPicker() {
	document.querySelector('.color').click();
}

function onTextAlign(align) {
	input.focus();
	setTextAlign(align);
	renderMeme();
}
