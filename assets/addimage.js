// const selectimage=document.querySelector(".select-image")
// const inputFile=document.querySelector("#file")
// const imgArea=document.querySelector(".img-area")

// selectimage.addEventListener('click',function(){
//     inputFile.click();
// })
// inputFile.addEventListener('change',function(){
//     const image=this.files[0]
//         const reader=new FileReader();
//         reader.onload=()=>{
//         const allImg=imgArea.querySelectorAll('img')
//         allImg.forEach((item)=>item.remove())
//         const imgUrl=reader.result;
//         const img=document.createElement('img')
//         img.src=imgUrl
//         imgArea.appendChild(img);
//         imgArea.classList.add('active')
//         imgArea
//     }
//     reader.readAsDataURL(image)
// })

function previewImage() {
    var file = document.getElementById("imageInput").files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var previewArea = document.getElementById("preview");
        previewArea.innerHTML = '<img src="' + e.target.result + '" alt="Image Preview"/>';
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById("preview").innerHTML = "";
    }
}

// images
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    dropArea.classList.add('highlight');
}

function unhighlight(e) {
    dropArea.classList.remove('highlight');
}

function handleDrop(e) {
    var dt = e.dataTransfer;
    var files = dt.files;

    handleFiles(files);
}

function handleFiles(files) {
    files = [...files];
    files.forEach(previewFile);
}

function previewFile(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        document.getElementById('gallery').appendChild(img);
    }
}

let dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

dropArea.addEventListener('drop', handleDrop, false);