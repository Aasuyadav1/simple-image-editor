let imageInput = document.querySelector('#upload');
let previewImage = document.querySelector('.prev-img')
imageInput.addEventListener("change", ()=>{
    let selectedImg = imageInput.files[0];
    let url = URL.createObjectURL(selectedImg);
    previewImage.src = url
})