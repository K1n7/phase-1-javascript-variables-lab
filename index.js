document.addEventListener("DOMContentLoaded", () => {
  // Simulated server data with all cakes
  const cakes = [
    {
      id: 1,
      name: "Let It Drip",
      description: "Quadruple chocolate cake just drip drip dripping in flavor!",
      image_url:
        "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/let-it-drip-cake.jpg",
      reviews: [
        "Yummy Yummy Yummy!",
        "Is this a real cake, or is this just fantasy?",
        "I've always hated cakes with no flavor, so this is absolutely delightful.",
        "Best cake ever!! I love you!!!",
      ],
    },
    {
      id: 2,
      name: "My Cake Is Poppin, My Cake is Cool",
      description:
        "Elegant, refined, assured, tasty... This cake shows that fruit cakes do have some soul!",
      image_url:
        "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/popcorn-cake.jpg",
      reviews: ["Lil Mama's fav cake!!!", "Like a river of joy"],
    },
    {
      id: 3,
      name: "Fruit Salad Fingers",
      description: "A colorful mix of fruits in every slice!",
      image_url:
        "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/fruit-salad-cake.jpg",
      reviews: ["So refreshing!", "Perfect for summer parties!"],
    },
    {
      id: 4,
      name: "Winter Wonderland",
      description: "A snowy delight with white chocolate and coconut!",
      image_url:
        "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/winter-wonderland-cake.jpg",
      reviews: ["Tastes like Christmas!", "Love the coconut flakes!"],
    },
    {
      id: 5,
      name: "Uh Oh! Which Way is Up",
      description: "A gravity-defying cake that's as fun as it is tasty!",
      image_url:
        "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/upside-down-cake.jpg",
      reviews: ["So creative!", "My kids loved it!"],
    },
    {
      id: 6,
      name: "Strawberry Fields 4Eva",
      description: "A berrylicious cake with layers of strawberry goodness!",
      image_url:
        "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/strawberry-fields-cake.jpg",
      reviews: ["Berry amazing!", "Strawberry heaven!"],
    },
    {
      id: 7,
      name: "Starry Bright",
      description: "A galaxy-themed cake that's out of this world!",
      image_url:
        "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/starry-bright-cake.jpg",
      reviews: ["Love the theme!", "Looks too good to eat!"],
    },
    {
      id: 8,
      name: "Oreo Overload",
      description: "A rich chocolate cake with layers of Oreos and cream!",
      image_url:
        "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/oreo-overload-cake.jpg",
      reviews: ["Oreo lovers' dream!", "So chocolaty and creamy!"],
    },
  ];

  // Function to display a cake's details
  function displayCakeDetails(cake) {
    const cakeName = document.getElementById("cake-name");
    const cakeImage = document.getElementById("cake-image");
    const cakeDescription = document.getElementById("cake-description");
    const reviewList = document.getElementById("review-list");

    // Update cake details
    cakeName.textContent = cake.name;
    cakeImage.src = cake.image_url;
    cakeImage.alt = cake.name;
    cakeDescription.textContent = cake.description;

    // Populate reviews
    reviewList.innerHTML = "";
    cake.reviews.forEach((review) => {
      const reviewItem = document.createElement("li");
      reviewItem.textContent = review;

      // Bonus: Remove review on click
      reviewItem.addEventListener("click", () => {
        reviewItem.remove();
      });

      reviewList.appendChild(reviewItem);
    });
  }

  // Function to populate the cake menu
  function populateCakeMenu() {
    const cakeList = document.getElementById("cake-list");

    cakes.forEach((cake) => {
      const listItem = document.createElement("li");
      listItem.textContent = cake.name;

      // Display selected cake details on click
      listItem.addEventListener("click", () => displayCakeDetails(cake));

      cakeList.appendChild(listItem);
    });
  }

  // Add new review
  const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const reviewInput = document.getElementById("review");
    const newReview = reviewInput.value.trim();

    if (newReview) {
      const reviewList = document.getElementById("review-list");
      const reviewItem = document.createElement("li");
      reviewItem.textContent = newReview;

      // Bonus: Remove review on click
      reviewItem.addEventListener("click", () => {
        reviewItem.remove();
      });

      reviewList.appendChild(reviewItem);
      reviewInput.value = ""; // Clear the input field
    }
  });

  // Update description
  const descriptionForm = document.getElementById("description-form");
  descriptionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const descriptionInput = document.getElementById("description");
    const newDescription = descriptionInput.value.trim();

    if (newDescription) {
      const cakeDescription = document.getElementById("cake-description");
      cakeDescription.textContent = newDescription;
      descriptionInput.value = ""; // Clear the input field
    }
  });

  // Initialize page with the first cake's details
  populateCakeMenu();
  displayCakeDetails(cakes[0]);
});

