let newImage = document.querySelector("#meme-insert")
let imageContainer = document.querySelector("#meme-image")

function memeText(){
  const text = document.querySelector("#text-input").value
  const textMeme = document.querySelector("#meme-text")
  textMeme.firstElementChild.innerText = text
}


function updateImage(){
}