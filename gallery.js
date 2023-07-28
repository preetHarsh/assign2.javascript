// variables
const featuredImage = document.querySelector("figure img");
const imageTitle = document.querySelector("figure figcaption");
const thumbnailList = document.querySelector("#gallery ul");

// array of image objects
const images = [
  {
    filename: "flowers-yellow",
    title:
      "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=61514522",
    credit: " Dietmar Rabich - Own work, CC BY-SA 4.0",
  },

  {
    filename: "flowers-red",
    title: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=40957238",
    credit: " Dietmar Rabich - Own work, CC BY-SA 4.0",
  },
  {
    filename: "flowers-white",
    title:
      "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=48211466",
    credit: " Dietmar Rabich - Own work, CC BY-SA 4.0",
  },
  {
    filename: "flowers-purple",
    title: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=48576226",
    credit: " Dietmar Rabich - Own work, CC BY-SA 4.0",
  },
  {
    filename: "flowers-pink",
    title: "Market in Münster, North Rhine-Westphalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=62071586",
    credit: " Dietmar Rabich - Own work, CC BY-SA 4.0",
  },
];

//  function to display large image
function displayImage(imageUrl, title) {
  featuredImage.src = imageUrl;
  imageTitle.textContent = title;
}

//  thumbnail click handler
function thumbnailClickHandler(event) {
  const imageUrl = event.currentTarget.dataset.largeImage;
  const title = event.currentTarget.dataset.title;
  displayImage(imageUrl, title);
}

//  function to create thumbnails dynamically
function createThumbnail(imageUrl, title) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;
  img.width = 240;
  img.height = 160;
  img.dataset.largeImage = imageUrl.replace("-small", "-large");
  img.dataset.title = title;
  img.addEventListener("click", thumbnailClickHandler);
  li.appendChild(img);
  return li;
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  images.forEach((image) => {
    // create thumbnails
    const thumbnailElement = createThumbnail(
      `images/${image.filename}-small.jpg`,
      image.title
    );
    thumbnailList.appendChild(thumbnailElement);
  });
  // Initialize the gallery with the first image
  if (images.length > 0) {
    displayImage(`images/${images[0].filename}-large.jpg`, images[0].title);
  }
});
