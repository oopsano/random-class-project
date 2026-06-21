// 1) THEME TOGGLE 
const themeBtn = document.getElementById("themeBtn"); 
themeBtn.addEventListener("click", function () 
{ document.body.classList.toggle("darkTheme"); }); 

// 2) SHOW / HIDE TRIVIA WORKS!	
const toggleTriviaBtn = document.getElementById("toggleTriviaBtn"); 
const triviaText = document.getElementById("triviaText"); 
toggleTriviaBtn.addEventListener
("click", function () 
{ if (triviaText.style.display === "none") 
{ triviaText.style.display = "block"; } 
else { triviaText.style.display = "none"; } }); 

// 3) IMAGE SWAP 
const nextImgBtn = document.getElementById("nextImgBtn"); 
const mediaImage = document.getElementById("mediaImage"); 

// IMPORTANT: These file paths MUST match the files in the img folder 
const images = ["img/image1.png", "img/image2.png"]; 
let currentIndex = 0; 
nextImgBtn.addEventListener("click", function () 
{ currentIndex = currentIndex + 1; 
if (currentIndex >= images.length) 
{ currentIndex = 0; } 
mediaImage.src = images[currentIndex]; }); 