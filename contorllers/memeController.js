'use strict';

function renderMeme(markCurrLine = true) {
	var canvas = document.querySelector('#canvas');
	var ctx = canvas.getContext('2d');
	let x;

	var img = new Image();
	const result = getImgs().find((img) => img.id === getMeme().selectedImgId);
	img.src = result.url;
	canvas.width = img.width;
	canvas.height = img.height;
	ctx.drawImage(img, 0, 0);

	for (var i = 0; i < getMeme().lines.length; i++) {
		const currLine = getMeme().lines[i];
		ctx.font = `${currLine.size}px ${currLine.font}`;
		var text = currLine.txt;
		ctx.fillStyle = currLine.color;

		ctx.textAlign = currLine.align;
		ctx.textBaseline = 'top';

		if (ctx.textAlign === 'center') {
			x = canvas.width / 2;
		} else if (ctx.textAlign === 'left') {
			x = 20;
		} else {
			x = canvas.width - 20;
		}
		ctx.fillText(text, x, currLine.y);
		ctx.strokeStyle = 'black';
		ctx.strokeText(text, x, currLine.y);

		if (markCurrLine && i === getMeme().selectedLineIdx) {
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'red';
			ctx.strokeRect(0, currLine.y, canvas.width, currLine.size);
		}
	}
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
	renderMeme(false);
	const data = canvas.toDataURL();
	elLink.href = data;
	renderMeme();
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
