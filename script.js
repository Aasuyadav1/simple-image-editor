
let imageInput = document.querySelector('#upload');
let previewImage = document.querySelector('.prev-img');
let brigtnessRange = document.querySelector('#bright-range');
let inversionRange = document.querySelector('#Inversion');
let saturationRange = document.querySelector('#saturation');
let grayscaleRange = document.querySelector('#grayscale');
let imagcon = document.querySelector('.image');


let rotateRight = document.querySelector('.ro-right');
let rotateLeft = document.querySelector('.ro-left');
let flipHori = document.querySelector('.flip-hor');
let flipVer = document.querySelector('.flip-ver');

let cropBtns = document.querySelectorAll('.crop');
let downloadBtn = document.querySelector('.down');

let currentRotation = 0;
let trackImg = false;

downloadBtn.addEventListener('click', () => {
    downloadFilteredImage();
    
});


function downloadFilteredImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Use naturalWidth and naturalHeight instead of style properties
    const width = previewImage.naturalWidth;
    const height = previewImage.naturalHeight;

    canvas.width = width;
    canvas.height = height;

    // Apply rotation and flip
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((currentRotation * Math.PI) / 180);
    if (currentRotation === 180) {
        ctx.scale(-1, 1); // Flip horizontally
    }
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.filter = previewImage.style.filter;

    ctx.drawImage(previewImage, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL('image/jpeg');

    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'filtered_image.jpg'; 

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


imageInput.addEventListener("change", () => {
    let selectedImg = imageInput.files[0];
    if (!selectedImg){
                alert("first add image")
                return;
    }
    let url = URL.createObjectURL(selectedImg);
    previewImage.src = url;
    trackImg = true;
});
let filterSection = document.querySelectorAll('.filters')
filterSection.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(!trackImg){
            alert("enter the image")
        }
    })
})
function applyFilter() {
    previewImage.style.filter = `
        brightness(${brigtnessRange.value}%) 
        invert(${inversionRange.value}%) 
        saturate(${saturationRange.value}%) 
        grayscale(${grayscaleRange.value}%)
    `;
}

function updateRotation(degrees) {
    currentRotation += degrees;
    previewImage.style.transform = `rotate(${currentRotation}deg)`;
}
function updateStart(deg){
    previewImage.style.transform = `rotate(${deg}deg)`
}

rotateRight.addEventListener("click", () => updateRotation(90));
rotateLeft.addEventListener("click", () => updateRotation(-90));
flipHori.addEventListener("click", () => updateRotation(180));
flipVer.addEventListener("click", () => updateStart(0));

brigtnessRange.addEventListener("change", () => {
    let briValue = brigtnessRange.value;
    let brightValue = document.querySelector('.bright-value');
    brightValue.textContent = `${briValue}%`;
    applyFilter();
});

inversionRange.addEventListener("change", () => {
    let invValue = inversionRange.value;
    let inversValue = document.querySelector('.inver-value');
    inversValue.textContent = `${invValue}%`;
    applyFilter();
});

saturationRange.addEventListener("change", () => {
    let satValue = saturationRange.value;
    let sautuValue = document.querySelector('.sat-value');
    sautuValue.textContent = `${satValue}%`;
    applyFilter();
});

grayscaleRange.addEventListener("change", () => {
    let graysValue = grayscaleRange.value;
    let greyValue = document.querySelector('.gray-value');
    greyValue.textContent = `${graysValue}%`;
    applyFilter();
});


cropBtns.forEach((e, i) => {
    e.addEventListener("click", () => {
        if (i === 1) {
            previewImage.style.aspectRatio = '1/1';
        } else if (i === 2) {
            previewImage.style.aspectRatio = '1/2';
        } else if (i === 3) {
            previewImage.style.aspectRatio = '3/2';
        } else if (i === 4) {
            previewImage.style.aspectRatio = '5/4';
        } else if (i === 5) {
            previewImage.style.aspectRatio = '9/16';
        } 
    });
})