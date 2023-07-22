let movies = [
  {
      name: 'Loki',
      des: 'Loki, the God of Mischief, steps out of his brothers shadow to embark on an adventure that takes place after the events of Avengers: Endgame',
      image:'images/slider 1.PNG'
  },
  {
      name: 'Falcon and the winter soldier',
      des: 'Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.',
      image:'images/slider 2.PNG'
  },
  {
      name: "Wanda Vision",
      des: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
      image:"images/slider 3.PNG"
  },
  {
      name: 'Raya and the last dragon',
      des: 'Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.',
      image: 'images/slider 4.PNG'
  },
  {
      name: 'Luca',
      des: 'Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water surface.',
      image: 'images/slider 5.PNG'
  }
]
const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement('div');
  var imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  
  //attaching all the elements


  carousel.appendChild(slide); //   <!-- <div class="slider">
 
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  slide.appendChild(content); //  <!-- <div class="slider"> 
  //content ->>
  content.appendChild(h1); 
  content.appendChild(p); 
  // <div class="slide-content">
  // <h1 class="movie-title">loki</h1>
  // <p class="movie-des"> Lorem ipsu em</p></div>
  
  slide.appendChild(imgElement); // <img  class="slider-img" src="images/slider 1.PNG" alt ="" />
  imgElement.appendChild(document.createTextNode(''));
  
  //settings up images

  imgElement.src = movies[slideIndex].image;
  //src="images/slider i .PNG
  slideIndex++;

  //settings elements classnames
  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-title';
  p.className = 'movie-des';
  imgElement.className = 'slider-img'

  sliders.push(slide);
  if (sliders.length) {
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
}
for(let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);


//video cards

const videoCards = [...document.querySelectorAll('.video-card')];
videoCards.forEach(item =>{
  item.addEventListener('mouseover', () =>{
    let video = item.children[1];
    video.play()
  })
  item.addEventListener('mouseleave', () =>{
    let video = item.children[1];
    video.pause()
  });
})

//card sliders
