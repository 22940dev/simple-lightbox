const lightbox = document.createElement('div')
lightbox.setAttribute("id", "lightbox")
document.body.append(lightbox)

const imgs = document.querySelectorAll('.grid img')
console.log(imgs)

imgs.forEach(img => {
    img.addEventListener('click', e => {
        lightbox.classList.add('active')
        const imgLightbox = document.createElement('img')
        imgLightbox.setAttribute("src", `${img.src}`)
        if(lightbox.firstChild) {
            lightbox.firstChild.remove()
        }
        lightbox.append(imgLightbox)
    })
})

lightbox.addEventListener("click", e=> {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})