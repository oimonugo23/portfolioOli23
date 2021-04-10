console.log("Hello World");
const aboutMeLink = document.getElementById("about-me-nav-link");
const workLink = document.getElementById("work-nav-link");
const contactMeLink = document.getElementById("contact-me-nav-link");

aboutMeLink.addEventListener("click", function () {
  //make about me 'active'
  aboutMeLink.classList.add("active");

  //take 'active' off both the others
  workLink.classList.remove("active");
  contactMeLink.classList.remove("active");
});

workLink.addEventListener("click", function () {
  workLink.classList.add("active");
  aboutMeLink.classList.remove("active");
  contactMeLink.classList.remove("active");
});

contactMeLink.addEventListener("click", function () {
  contactMeLink.classList.add("active");
  workLink.classList.remove("active");
  aboutMeLink.classList.remove("active");
});
