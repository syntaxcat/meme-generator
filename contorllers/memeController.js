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

		for (var i = 0; i < getMeme().lines.length; i++) {
			const currLine = getMeme().lines[i];
			ctx.font = `${currLine.size}px ${currLine.font}`;
			var text = currLine.txt;
			ctx.fillStyle = currLine.color;

			ctx.textAlign = currLine.align;

			if (ctx.textAlign === 'center') {
				x = canvas.width / 2;
			} else if (ctx.textAlign === 'left') {
				x = 20;
			} else {
				x = canvas.width - 20;
			}
			ctx.fillText(text, x, currLine.y);
			ctx.strokeText(text, x, currLine.y);
		}
	};
	const result = getImgs().find((img) => img.id === getMeme().selectedImgId);
	img.src = result.url;
}

var inputColor = document.querySelector('.color');

var selectFontFamily = document.querySelector('.font-family');

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
	selectFontFamily.value = currLine.font;
	renderMeme();
}

function toggleMenu() {
	document.body.classList.toggle('menu-open');
}

function onDownloadCanvas(elLink) {
	const data = canvas.toDataURL();
	elLink.href = data;
}

function showColorPicker() {
	document.querySelector('.color').click();
}

function onTextAlign(align) {
	input.focus();
	setTextAlign(align);
	renderMeme();
}

function onMoveLineDown() {
	moveLineDown();
	renderMeme();
}

function onMoveLineUp() {
	moveLineUp();
	renderMeme();
}

function onChangeFontFamily(val) {
	changeFontFamily(val);
	renderMeme();
}
