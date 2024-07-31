let addParagraphButton = document.getElementById("p-button");
let addImageButton = document.getElementById("img-button");
let paragraphDiv = document.getElementById("p-div");
let imageDiv = document.getElementById("img-div");

function addParagraph(){
    let newParagraph = document.createElement('p');
    newParagraph.innerText = "Toucking grass is good for you";
    newParagraph.style.backgroundColor = "blue";
    newParagraph.style.padding = "10px";
    newParagraph.style.color = "white";
    paragraphDiv.appendChild(newParagraph);
}

addParagraphButton.addEventListener("click", addParagraph);

function addImage(){
    let newImage = document.createElement('img');
    newImage.src = "images/squirtle.png";
    imageDiv.appendChild(newImage);
}

addImageButton.addEventListener("click", addImage);