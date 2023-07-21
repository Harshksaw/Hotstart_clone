let movies = [
  {
    name: "loki",
    des: "Follow the adventures of Loki, the God of Mischief, after the events of ",
    image: "images/slider 1.png",
  },
  {
    name: "falcon and the winter soldier",
    des: "Set in the aftermath of this action-packed series follows Sam Wilson (Falcon) and Bucky Barnes (The Winter Soldier) as they team up for a global adventure.",

    image: "images/slider 2.png",
  },
  {
    name: "wanda vision",
    des: "tep into a surreal world where Wanda Maximoff (Scarlet Witch) and Vision live idyllic suburban lives. ",

    image: "images/slider 3.png",
  },
  {
    name: "raya and the last dragon",
    des: "mbark on a magical quest with Raya, a brave warrior, as she sets out to find the last dragon and restore peace to her fractured land. ",

    image: "images/slider 4.png",
  },
  {
    name: "luca",
    des: "Dive into the enchanting coastal town of Portorosso in Italy, where you'll meet Luca, a young sea monster who dreams of experiencing life on land.",

    image: "images/slider 5.png",
  },
];
const carousel = document.querySelector(".carousel");
let slider = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  //attaching all the elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(documnet.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  //settings up images

  imgElement.src = movies[slideIndex].images;
  slideIndex++;

  //settings elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);
  if (slide.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - 
        ${30 * (sliders.length - 2)}px)`;
    // The condition checks if `slide` is not empty (has a length greater than zero).
    // If the condition is true, the code inside the block will be executed.

    // sliders[0] refers to the first element in the array `sliders`.
    // `sliders` is likely an array of DOM elements representing sliders.

    // The style.marginLeft property sets the left margin of the first element in the sliders array.

    // `calc(...)` is a CSS function used for mathematical calculations.
    // In this case, it is used to calculate the left margin based on the number of sliders present.

    // 100% is the width of a single slider. It represents the full width of the slider container.
    // (sliders.length - 2) calculates the number of sliders except the first and last sliders.

    // 30px is the spacing (margin) between each slider.

    // The formula `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)` calculates the left margin:
    // It multiplies 100% by the number of sliders except the first and last sliders.
    // It multiplies 30px by the number of sliders except the first and last sliders.
    // Then it subtracts both values from the left margin, effectively positioning the first slider
    // so that it shows the second-to-last slider, leaving the first and last sliders partially hidden.
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);
