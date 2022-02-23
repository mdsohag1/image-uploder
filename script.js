const dragArea = document.querySelector(".container"),
    dragText = document.querySelector("h3"),
    button = document.querySelector("button"),
    input = document.querySelector("input");
let myfile;

function clickBtn(){
    input.click();
}

input.addEventListener("change",function(){
    myfile = this.files[0];
    dragArea.classList.add("active");
    showMe()
});

dragArea.addEventListener("dragover",function (e){
    e.preventDefault();
    dragArea.classList.add("active");
    dragText.textContent = "Relese to uplode file";
});
dragArea.addEventListener("dragleave",function (){
    dragArea.classList.remove("active");
    dragText.textContent = "Drag & Drop";
});


dragArea.addEventListener("drop",function(e){
    e.preventDefault();
    myfile = e.dataTransfer.files[0];
    showMe();
});

function showMe(){
    let fileType = myfile.type;
    let validEx = ["image/jpeg","image/jpg","image/png"];

    if(validEx.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = function(){
            let imgUrl = fileReader.result;
            let img = `<img src="${imgUrl}" alt="">`;
            dragArea.innerHTML = img;
        }
        fileReader.readAsDataURL(myfile);
    }
    else{
        alert("this file is not valid");
        dragArea.classList.remove("active");
        dragText.textContent = "Drag & Drop";
    }
}

