'use strict';
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
const IMAGE_SIZE = 500;

function renderMeme(markCurrLine = true) {
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

		ctx.textBaseline = 'top';

		const x = currLine.x;
		ctx.fillText(text, x, currLine.y);
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 1;
		ctx.strokeText(text, x, currLine.y);

		if (markCurrLine && i === getMeme().selectedLineIdx) {
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'red';
			ctx.strokeRect(x, currLine.y, ctx.measureText(currLine.txt).width, currLine.size);
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
	deleteLine();
	input.value = getCurrLine().txt;
	inputColor.value = getCurrLine().color;
	renderMeme();
}

//TODO: FIX SWITCH(IF THERE IS NO ADDED LINE BEFORE-IT CANNOT SWITCH)
function onSwitchLine() {
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
	const currLine = getCurrLine();
	ctx.font = `${currLine.size}px ${currLine.font}`;
	setTextAlign(align, ctx.measureText(currLine.txt).width);
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

function uploadImg() {
	renderMeme(false);
	const imgDataUrl = canvas.toDataURL('image/jpeg');

	// A function to be called if request succeeds
	function onSuccess(uploadedImgUrl) {
		const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl);
		const chareContainer = document.querySelector('.share-container');
		chareContainer.innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`;
		chareContainer.querySelector('.btn').click();
	}
	doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
	const formData = new FormData();
	formData.append('img', imgDataUrl);

	fetch('//ca-upload.com/here/upload.php', {
		method: 'POST',
		body: formData
	})
		.then((res) => res.text())
		.then((url) => {
			console.log('Got back live url:', url);
			onSuccess(url);
		})
		.catch((err) => {
			console.error(err);
		});
}
