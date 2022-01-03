
function memeText(){
  
  
  const text = document.querySelector("#text-input").value
  const textMeme = document.querySelector("#meme-text")
  textMeme.innerText = text
  console.log(text)
}