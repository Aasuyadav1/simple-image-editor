// let imageInput = document.querySelector('#upload');
// let previewImage = document.querySelector('.prev-img');
// let brigtnessRange = document.querySelector('#bright-range');
// let inversionRange = document.querySelector('#Inversion');
// let saturationRange = document.querySelector('#saturation');
// let grayscaleRange = document.querySelector('#grayscale');


// let rotateRight = document.querySelector('.ro-right');
// let rotateLeft = document.querySelector('.ro-left');
// let flipHori = document.querySelector('.flip-hor');
// let flipVer = document.querySelector('.flip-ver');

// let cropBtns = document.querySelectorAll('.crop');
// let downloadBtn = document.querySelector('.down');

// let currentRotation = 0;
// let trackImg = false;

// downloadBtn.addEventListener('click', () => {
//     downloadFilteredImage();
    
// });


// function downloadFilteredImage() {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');

//     // Use naturalWidth and naturalHeight instead of style properties
//     const width = previewImage.naturalWidth;
//     const height = previewImage.naturalHeight;

//     canvas.width = width;
//     canvas.height = height;

//     // Apply rotation and flip
//     ctx.translate(canvas.width / 2, canvas.height / 2);
//     ctx.rotate((currentRotation * Math.PI) / 180);
//     if (currentRotation === 180) {
//         ctx.scale(-1, 1); // Flip horizontally
//     }
//     ctx.translate(-canvas.width / 2, -canvas.height / 2);

//     ctx.filter = previewImage.style.filter;

//     ctx.drawImage(previewImage, 0, 0, canvas.width, canvas.height);

//     const dataURL = canvas.toDataURL('image/jpeg');

//     const a = document.createElement('a');
//     a.href = dataURL;
//     a.download = 'filtered_image.jpg'; 

//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// }


// imageInput.addEventListener("change", () => {
//     let selectedImg = imageInput.files[0];
//     if (!selectedImg){
//                 alert("first add image")
//                 return;
//     }
//     let url = URL.createObjectURL(selectedImg);
//     previewImage.src = url;
//     trackImg = true;
// });
// let filterSection = document.querySelectorAll('.filters')
// filterSection.forEach((e)=>{
//     e.addEventListener("click",()=>{
//         if(!trackImg){
//             alert("enter the image")
//         }
//     })
// })
// function applyFilter() {
//     previewImage.style.filter = `
//         brightness(${brigtnessRange.value}%) 
//         invert(${inversionRange.value}%) 
//         saturate(${saturationRange.value}%) 
//         grayscale(${grayscaleRange.value}%)
//     `;
// }

// function updateRotation(degrees) {
//     currentRotation += degrees;
//     previewImage.style.transform = `rotate(${currentRotation}deg)`;
// }
// function updateStart(deg){
//     previewImage.style.transform = `rotate(${deg}deg)`
// }

// rotateRight.addEventListener("click", () => updateRotation(90));
// rotateLeft.addEventListener("click", () => updateRotation(-90));
// flipHori.addEventListener("click", () => updateRotation(180));
// flipVer.addEventListener("click", () => updateStart(0));

// brigtnessRange.addEventListener("change", () => {
//     let briValue = brigtnessRange.value;
//     let brightValue = document.querySelector('.bright-value');
//     brightValue.textContent = `${briValue}%`;
//     applyFilter();
// });

// inversionRange.addEventListener("change", () => {
//     let invValue = inversionRange.value;
//     let inversValue = document.querySelector('.inver-value');
//     inversValue.textContent = `${invValue}%`;
//     applyFilter();
// });

// saturationRange.addEventListener("change", () => {
//     let satValue = saturationRange.value;
//     let sautuValue = document.querySelector('.sat-value');
//     sautuValue.textContent = `${satValue}%`;
//     applyFilter();
// });

// grayscaleRange.addEventListener("change", () => {
//     let graysValue = grayscaleRange.value;
//     let greyValue = document.querySelector('.gray-value');
//     greyValue.textContent = `${graysValue}%`;
//     applyFilter();
// });


// cropBtns.forEach((e, i) => {
//     e.addEventListener("click", () => {
//         if (i === 1) {
//             previewImage.style.aspectRatio = '1/1';
//         } else if (i === 2) {
//             previewImage.style.aspectRatio = '1/2';
//         } else if (i === 3) {
//             previewImage.style.aspectRatio = '3/2';
//         } else if (i === 4) {
//             previewImage.style.aspectRatio = '5/4';
//         } else if (i === 5) {
//             previewImage.style.aspectRatio = '9/16';
//         } 
//     });
// });



let imageInput = document.querySelector('#upload');
let previewImage = document.querySelector('.prev-img');
let brigtnessRange = document.querySelector('#bright-range');
let inversionRange = document.querySelector('#Inversion');
let saturationRange = document.querySelector('#saturation');
let grayscaleRange = document.querySelector('#grayscale');

let rotateRight = document.querySelector('.ro-right');
let rotateLeft = document.querySelector('.ro-left');
let flipHori = document.querySelector('.flip-hor');
let flipVer = document.querySelector('.flip-ver');

let cropBtns = document.querySelectorAll('.crop');
let downloadBtn = document.querySelector('.down');

let currentRotation = 0;
let trackImg = false;

// Create a canvas and context for image processing
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Function to get adjusted dimensions based on aspect ratio
function getAdjustedDimensions(originalWidth, originalHeight, numerator, denominator) {
    const aspectRatioMultiplier = numerator / denominator;

    let newWidth, newHeight;

    if (originalWidth / originalHeight > aspectRatioMultiplier) {
        newWidth = originalHeight * aspectRatioMultiplier;
        newHeight = originalHeight;
    } else {
        newWidth = originalWidth;
        newHeight = originalWidth / aspectRatioMultiplier;
    }

    return { width: newWidth, height: newHeight };
}

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

    // Use 'image/jpeg' for better compression and quality
    const dataURL = canvas.toDataURL('image/jpeg');

    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'filtered_image.jpg'; // Change file extension to jpg

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}



imageInput.addEventListener('change', () => {
    let selectedImg = imageInput.files[0];
    if (!selectedImg) {
        alert('First add an image');
        return;
    }
    let url = URL.createObjectURL(selectedImg);
    previewImage.src = url;
    trackImg = true;
});

let filterSection = document.querySelectorAll('.filters');
filterSection.forEach((e) => {
    e.addEventListener('click', () => {
        if (!trackImg) {
            alert('Enter the image');
        }
    });
});

function applyFilter() {
    // Get the aspect ratio from the preview image style
    const aspectRatio = previewImage.style.aspectRatio;

    // Set the aspect ratio on the canvas
    canvas.style.aspectRatio = aspectRatio;

    // Other filter logic remains the same
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

function updateStart(deg) {
    previewImage.style.transform = `rotate(${deg}deg)`;
}

rotateRight.addEventListener('click', () => updateRotation(90));
rotateLeft.addEventListener('click', () => updateRotation(-90));
flipHori.addEventListener('click', () => updateRotation(180));
flipVer.addEventListener('click', () => updateStart(0));

brigtnessRange.addEventListener('change', () => {
    let briValue = brigtnessRange.value;
    let brightValue = document.querySelector('.bright-value');
    brightValue.textContent = `${briValue}%`;
    applyFilter();
});

inversionRange.addEventListener('change', () => {
    let invValue = inversionRange.value;
    let inversValue = document.querySelector('.inver-value');
    inversValue.textContent = `${invValue}%`;
    applyFilter();
});

saturationRange.addEventListener('change', () => {
    let satValue = saturationRange.value;
    let sautuValue = document.querySelector('.sat-value');
    sautuValue.textContent = `${satValue}%`;
    applyFilter();
});

grayscaleRange.addEventListener('change', () => {
    let graysValue = grayscaleRange.value;
    let greyValue = document.querySelector('.gray-value');
    greyValue.textContent = `${graysValue}%`;
    applyFilter();
});

cropBtns.forEach((e, i) => {
    e.addEventListener('click', () => {
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
});
