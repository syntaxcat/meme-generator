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
		ctx.font = `${getMeme().lines[0].size}px IMPACT`;
		//1
		var text = getMeme().lines[0].txt;
		ctx.fillStyle = getMeme().lines[0].color;
		ctx.fillText(text, 30, 30);
		//2
		if (getMeme().lines[1]) {
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

// function onMemeSelected(image) {
// 	var clickedImg = getImgs().find((img) => {
// 		return img.url === image.src;
// 	});
// 	getMeme().selectedImgId = clickedImg.id;
// 	console.log(gMeme);
// 	draw();
// }

function onAddTxt(elTxt) {
	setLineTxt(elTxt);
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

// function renderTxtImg(){
//     const meme =getMeme();
//     const memeLines = meme.lines;
//     memeLines.forEach(memeLine=>{
//         gCtx.font = `${memeLine.size}px Georgia`
//         gCtx.fillStyle =memeLine.color
//         gCtx.fillText(memeLine.txt, memeLine.x, memeLine.y);
//     })
// }
