const Button1 = document.getElementById("first");
const Button2 = document.getElementById("second");
const Button3 = document.getElementById("third");

const RedBtn = document.getElementById("Red");
const GreenBtn = document.getElementById("Green");
const BlueBtn = document.getElementById("Blue");
const PinkBtn = document.getElementById("Pink");

const inputQuantity = document.getElementById('inputQuantity')
const Buy = document.getElementById("BuyNow")

const model = document.getElementById("model"); // Ensure this is defined

Button1.addEventListener('click',()=>{
    model.src = "image1.png"
})
Button2.addEventListener('click',()=>{
    model.src = "image2.png"
})
Button3.addEventListener('click',()=>{
    model.src = "image3.png"
})

RedBtn.addEventListener('click',()=>{
    model.style.filter = 'sepia(1) hue-rotate(-50deg) saturate(5)'; // Red tint
})
GreenBtn.addEventListener('click',()=>{
    model.style.filter = 'sepia(1) hue-rotate(90deg) saturate(5)'; // Green tint
})
BlueBtn.addEventListener('click',()=>{
    model.style.filter = 'sepia(1) hue-rotate(200deg) saturate(5)'; // Blue tint
})
PinkBtn.addEventListener('click',()=>{
    model.style.filter = 'sepia(1) hue-rotate(-20deg) saturate(4)'; // Pink tint
});
