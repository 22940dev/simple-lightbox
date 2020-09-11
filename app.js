const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

const imgBig = document.createElement("img");
imgBig.classList.add("lightbox__img");

const caption = document.createElement("p");
caption.classList.add("lightbox__caption");
lightbox.appendChild(imgBig);
lightbox.appendChild(caption);

document.body.appendChild(lightbox);

const imgs = document.querySelectorAll(".grid__img");
console.log(imgs);

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    
    lightbox.classList.add("active");

    imgBig.setAttribute("src", `./img/${e.target.dataset.full}`);
    imgBig.classList.add("active");

    caption.textContent = img.alt;
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
  imgBig.classList.remove("active");
});
