let newImage = document.querySelector("#meme-insert")
let imageContainer = document.querySelector("#meme-image")

function memeText(){
  const text = document.querySelector("#text-input").value
  const textMeme = document.querySelector("#meme-text")
  textMeme.firstElementChild.innerText = text
}


function changeBoard(element){
  let borda = document.querySelector("#meme-image-container")
  if(element.id === "fire"){
    borda.style.border = "3px"
    borda.style.borderColor = "red"
    borda.style.borderStyle = "dashed"
  }else if(element.id === "water"){
    borda.style.border = "5px"
    borda.style.borderColor = "blue"
    borda.style.borderStyle = "double"
  }else if(element.id === "earth"){
    borda.style.border = "6px"
    borda.style.borderColor = "green"
    borda.style.borderStyle = "groove"
  }
}