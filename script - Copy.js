const nobtnTag = document.querySelector(".nobtn");
const yesbtnTag=document.querySelector(".yesbtn");
const titleATag=document.querySelector(".titleA");
const bodyTag=document.querySelector("body");

nobtnTag.addEventListener("click",functionone=()=>{
    const widthA=Math.floor(Math.random()*300)+1;
    const heightA=Math.floor(Math.random()*300)+1;
    nobtnTag.style.left=widthA+"px";
    nobtnTag.style.top=heightA+"px";

});
yesbtnTag.addEventListener("click",functiontwo=()=>{
    titleATag.innerHTML="welcome to Gay party";
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img4 = document.createElement("img");
    const img5 = document.createElement("img");
    const img6 = document.createElement("img");
    const img7 = document.createElement("img");
    const img8 = document.createElement("img");
    img1.classList.add("imgA");
    img2.classList.add("imgB");
    img3.classList.add("imgC");
    img4.classList.add("imgD");
    img5.classList.add("imgE");
    img6.classList.add("imgF");
    img7.classList.add("imgG");
    img8.classList.add("imgH");
    
    titleATag.appendChild(img1);
    titleATag.appendChild(img2);
    titleATag.appendChild(img3);
    titleATag.appendChild(img4);
    titleATag.appendChild(img5);
    titleATag.appendChild(img6);
    titleATag.appendChild(img7);
    titleATag.appendChild(img8);
    nobtnTag.style.visibility="hidden";
    yesbtnTag.style.visibility="hidden";

})