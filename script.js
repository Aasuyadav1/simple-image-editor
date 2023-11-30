let imageInput = document.querySelector('#upload');
let previewImage = document.querySelector('.prev-img');
let brigtnessRange = document.querySelector('#bright-range');
let inversionRange = document.querySelector('#Inversion');
let saturationRange = document.querySelector('#saturation');
let grayscaleRange = document.querySelector('#grayscale');




imageInput.addEventListener("change", ()=>{
    let selectedImg = imageInput.files[0];
    if(!selectedImg)return;
    let url = URL.createObjectURL(selectedImg);
    previewImage.src = url
})

brigtnessRange.addEventListener("change",()=>{
    let briValue = brigtnessRange.value;
    let brightValue = document.querySelector('.bright-value');
    brightValue.textContent = `${briValue}%`
    previewImage.style.filter = `brightness(${briValue}%)`
})

inversionRange.addEventListener("change",()=>{
    let invValue = inversionRange.value;
    let inversValue = document.querySelector('.inver-value');
    inversValue.textContent = `${invValue}%`
    previewImage.style.filter = `brightness(${brigtnessRange.value}%) invert(${invValue}%)`
})

saturationRange.addEventListener("change",()=>{
    let satValue = saturationRange.value;
    let sautuValue = document.querySelector('.sat-value');
    sautuValue.textContent = `${satValue}%`
    previewImage.style.filter = `brightness(${brigtnessRange.value}%) invert(${inversionRange.value}%) saturate(${satValue}%)`
})


grayscaleRange.addEventListener("change",()=>{
    let graysValue = grayscaleRange.value;
    let greyValue = document.querySelector('.gray-value');
    greyValue.textContent = `${graysValue}%`
    previewImage.style.filter = `brightness(${brigtnessRange.value}%) invert(${inversionRange.value}%) saturate(${saturationRange.value}%) grayscale(${graysValue}%)`
})

