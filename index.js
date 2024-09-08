let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

let autoRun;

const startAutoRun = () => {
    autoRun = setTimeout(() => {
      showSlider("next");
    }, 5000);
}

startAutoRun();

document.getElementById("next").onclick = () => {
    showSlider("next");
};

document.getElementById("prev").onclick = () => {
    showSlider("prev");
};


const showSlider = (type) => {
    if(type === "next") {
        SliderDom.appendChild(SliderDom.firstElementChild);
        thumbnailDom.appendChild(thumbnailDom.firstElementChild);
    } else {
        SliderDom.prepend(SliderDom.lastElementChild);
        thumbnailDom.prepend(thumbnailDom.lastElementChild);  
    }
    carouselDom.classList.add(type);

    setTimeout(() => {
      carouselDom.classList.remove(type);
    }, 2000);

    // clear interval
    clearTimeout(autoRun);
    
    // restart interval
    startAutoRun();
}

