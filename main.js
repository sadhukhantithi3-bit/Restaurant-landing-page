// Lightbox
const images = document.querySelectorAll(".gallery-img");
const modalImage = document.getElementById("modalImage");

images.forEach(img => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
  });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = name.value.trim();
  const email = email.value.trim();
  const message = message.value.trim();

  if(name.length < 3){
    alert("Name must be at least 3 characters");
    return;
  }

  if(!email.includes("@")){
    alert("Enter valid email");
    return;
  }

  if(message.length < 10){
    alert("Message must be at least 10 characters");
    return;
  }

  alert("Form submitted successfully!");
});

// Today's Special (Shows on Friday)
const day = new Date().getDay();
if(day === 5){
  document.getElementById("todayBadge").classList.remove("d-none");
}

// Dark Mode
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

if(localStorage.getItem("darkMode") === "true"){
  document.body.classList.add("dark-mode");
}