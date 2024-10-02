// Function to toggle blog content visibility
function toggleBlogContent(blogNumber) {
  const blogContent = document.getElementById("blog-content-" + blogNumber);
  const blogs = document.getElementsByClassName("blog-content");
  Array.from(blogs).forEach(blog => blog.style.display = "none");
  blogContent.style.display = "block";
}

// Function to reveal contact elements with delay
function revealContactElements() {
  const contactHeading = document.querySelector(".contact-heading");
  const contactDescriptions = document.querySelectorAll(".contact-description");
  const contactIcons = document.querySelectorAll(".contact-icon");
  const contactLabels = document.querySelectorAll(".contact-label");

  contactHeading.style.opacity = 1;
  contactHeading.style.transform = "translateY(0)";

  setTimeout(() => {
    contactDescriptions.forEach((description, index) => {
      description.style.opacity = 1;
      description.style.transform = "translateY(0)";
      contactIcons[index].style.opacity = 1;
      contactIcons[index].style.transform = "translateY(0)";
      contactLabels[index].style.opacity = 1;
      contactLabels[index].style.transform = "translateY(0)";
    });
  }, 1000);
}

// Function to toggle next card content in About section
let currentCardIndex = 0;
const aboutCards = document.querySelectorAll(".about-card");

function toggleNextCardContent() {
  aboutCards[currentCardIndex].classList.remove("active");
  currentCardIndex = (currentCardIndex + 1) % aboutCards.length;
  aboutCards[currentCardIndex].classList.add("active");
}

function autoToggleNextCardContent() {
  toggleNextCardContent();
  setTimeout(autoToggleNextCardContent, 7000); // Automatically change after 7 seconds
}

autoToggleNextCardContent();

// Function to toggle menu
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);

// Close the mobile menu when a navigation link is clicked
navLinks.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    setTimeout(() => {
      toggleMenu();
    }, 300); // Hide menu after 0.3 seconds delay
  }
});

// Combined resize event listener
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    burger.style.display = 'none';
    navLinks.classList.remove('nav-active');
  } else {
    burger.style.display = 'block';
  }
});

//  the navbar and burger on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

// Function to reveal home elements with delay for live-writing effect
function revealElements() {
  const homeTitle = document.querySelector(".home-title");
  const homeSubtitle = document.querySelector(".home-subtitle");
  const homeDescription = document.querySelector(".home-description");
  const homeButton = document.querySelector(".home-button");

  setTimeout(() => {
    homeTitle.style.opacity = "1";
    homeTitle.style.transform = "translateY(0)";
  }, 300);
  setTimeout(() => {
    homeSubtitle.style.opacity = "1";
    homeSubtitle.style.transform = "translateY(0)";
  }, 500);
  setTimeout(() => {
    homeDescription.style.opacity = "1";
    homeDescription.style.transform = "translateY(0)";
  }, 700);
  setTimeout(() => {
    homeButton.style.opacity = "1";
    homeButton.style.transform = "translateY(0)";
  }, 900);
}

// Call the function on page load
window.addEventListener("load", () => {
  revealElements();
  revealContactElements();
  autoToggleNextCardContent();
});

//  for dynamic introduction with typing animation
const introTexts = ["Ubaid Mushtaq", "a Software Engineer", "a Full Stack Web Developer", "an Enthusiastic Learner"];
const typingAnimation = document.querySelector(".typing-animation");
let currentIndex = 0;

function typeText(text, element) {
  let charIndex = 0;
  const typingSpeed = 100; // Adjust typing speed here

  function type() {
    if (charIndex < text.length) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      element.textContent = text.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, typingSpeed / 2);
    } else {
      currentIndex = (currentIndex + 1) % introTexts.length;
      setTimeout(() => typeText(introTexts[currentIndex], element), 500);
    }
  }

  type();
}

window.addEventListener("load", () => {
  // Animate the title and subtitle on page load
  document.querySelector(".home-title").style.animationPlayState = "running";
  document.querySelector(".home-subtitle").style.animationPlayState = "running";

  // Start the dynamic introduction typing animation
  typeText(introTexts[currentIndex], typingAnimation);
});

// Function to adjust poem size
const homeSection = document.querySelector(".home-section");

function adjustPoemSize() {
  const poemSections = document.querySelectorAll(".poem");
  const windowWidth = window.innerWidth;
  const maxWidthForPoem = 800; // Adjust this value as needed

  if (windowWidth <= maxWidthForPoem) {
    // Reduce padding for smaller screens to fit the poem
    homeSection.style.padding = "60px";
    poemSections.forEach(poem => {
      poem.style.margin = "10px 0";
    });
  } else {
    // Reset padding and margins for larger screens
    homeSection.style.padding = "120px";
    poemSections.forEach(poem => {
      poem.style.margin = "20px 0";
    });
  }
}

window.addEventListener("load", adjustPoemSize);
window.addEventListener("resize", adjustPoemSize);

// Function to toggle poem visibility
let activePoem = null;
let typingTimeout = null;

function togglePoem(technology) {
  const poem = document.getElementById(technology);

  if (activePoem && activePoem !== poem) {
    activePoem.style.display = "none";
  }

  if (poem.style.display === "block") {
    poem.style.display = "none";
    activePoem = null;
  } else {
    poem.style.display = "block";
    activePoem = poem;
    typePoem(poem);
  }
}

function typePoem(poem) {
  const text = poem.getAttribute('data-text') || poem.innerHTML;
  poem.innerHTML = "";
  let charIndex = 0;
  const typingSpeed = 65; // Adjust typing speed here (lower value means faster typing)

  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }

  function type() {
    if (charIndex < text.length) {
      poem.innerHTML += text.charAt(charIndex);
      charIndex++;
      typingTimeout = setTimeout(type, typingSpeed);
    }
  }

  type();
}

// Projects data ( can replace these placeholder images and descriptions projects)
const projectsData = [
  // Example project data
  {
    id: 1,
    title: "Project 1",
    description: "Description for project 1",
    image: "path/to/image1.jpg",
    link: "http://example.com/project1"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2",
    image: "path/to/image2.jpg",
    link: "http://example.com/project2"
  }
];

// Function to display project details
function showDetails(projectId) {
  const project = projectsData.find(project => project.id === projectId);

  // Display project details (you can use a modal or any other method)
  console.log('Showing details for project: ' + project.title);
  console.log('Description: ' + project.description);
  console.log('Link: ' + project.link);
}

// Function to create project cards and add them to the DOM
function createProjectCard(project) {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  projectCard.onclick = () => showDetails(project.id);

  const projectImage = document.createElement('img');
  projectImage.src = project.image;
  projectImage.alt = project.title;
  projectImage.classList.add('project-image');
  projectCard.appendChild(projectImage);

  const projectInfo = document.createElement('div');
  projectInfo.classList.add('project-info');

  const projectTitle = document.createElement('div');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.title;
  projectInfo.appendChild(projectTitle);

  const projectDescription = document.createElement('div');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = project.description;
  projectInfo.appendChild(projectDescription);

  const projectButtons = document.createElement('div');
  projectButtons.classList.add('project-buttons');

  const viewButton = document.createElement('button');
  viewButton.classList.add('project-button');
  viewButton.textContent = 'View Project';
  viewButton.onclick = () => window.location.href = project.link;
  projectButtons.appendChild(viewButton);

  projectInfo.appendChild(projectButtons);
  projectCard.appendChild(projectInfo);

  return projectCard;
}

// Function to add project cards to the DOM
function renderProjects() {
  const projectsContainer = document.querySelector('.projects-container');
  projectsData.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
}

// Function to handle "View More Projects" button click (Add your implementation here)
function handleViewMoreClick() {
  console.log('View More Projects button clicked!');
  // Add your logic to navigate to other project pages or load more projects.
}

// Call the function to render project cards on page load
window.addEventListener("load", renderProjects);

// // Add event listener to the "View More Projects" button
// const viewMoreButton = document.querySelector('.view-more-button');
// viewMoreButton.addEventListener('click', handleViewMoreClick);

function toggleProjectDetails(card) {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(c => {
    if (c !== card && c.classList.contains('active')) {
      c.classList.remove('active');
    }
  });
  card.classList.toggle('active');
}

function redirectToProject(url) {
  window.location.href = url;
}

