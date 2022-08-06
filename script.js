const textInput = document.getElementById('text-input');

const memeText = () => {
  const text = document.querySelector('#text-input').value;
  const textMeme = document.querySelector('#meme-text');
  textMeme.firstElementChild.innerText = text;
};

textInput.addEventListener('keydown', memeText);

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

const changeBoard = ({ target }) => {
  const borda = document.querySelector('#meme-image-container');
  if (target.id === 'fire') {
    borda.style.border = '3px';
    borda.style.borderColor = 'red';
    borda.style.borderStyle = 'dashed';
  } else if (target.id === 'water') {
    borda.style.border = '5px';
    borda.style.borderColor = 'blue';
    borda.style.borderStyle = 'double';
  } else if (target.id === 'earth') {
    borda.style.border = '6px';
    borda.style.borderColor = 'green';
    borda.style.borderStyle = 'groove';
  }
};

fire.addEventListener('click', changeBoard);
water.addEventListener('click', changeBoard);
earth.addEventListener('click', changeBoard);

const upMeme = document.getElementById('meme-insert');

const changeImage = ({ target }) => {
  const newMeme = document.querySelector('#meme-image');
  newMeme.src = URL.createObjectURL(target.files[0]);
  newMeme.onload = () => {
    URL.revokeObjectURL(newMeme.src);
  };
};

upMeme.addEventListener('change', changeImage);

const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');

const fixedMeme = ({ target }) => {
  const newMeme = document.querySelector('#meme-image');
  newMeme.src = target.src;
};

meme1.addEventListener('click', fixedMeme);
meme2.addEventListener('click', fixedMeme);
meme3.addEventListener('click', fixedMeme);
