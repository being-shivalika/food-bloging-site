// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


// Load dynamic content based on hash
async function loadPage(page) {
  try {
    const res = await fetch(`pages/${page}.html`);
    const content = await res.text();
    document.getElementById('content').innerHTML = content;
  } catch (error) {
    document.getElementById('content').innerHTML = "<h2>404 - Page Not Found</h2>";
  }
}




// Add to script.js after loadPage()
document.addEventListener("input", function (e) {
  if (e.target.id === "blogSearch") {
    const searchVal = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(searchVal) ? "block" : "none";
    });
  }
});




// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Initial Load
function router() {
  const page = location.hash.replace("#", "") || "home";
  loadPage(page);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

document.getElementById("foodCategory").addEventListener("change", function() {
  const selectedValue = this.value;
  alert("You selected: " + selectedValue);
});



  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      // Prevent default submission
      e.preventDefault();

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const location = document.getElementById("location").value.trim();
      const rating = document.getElementById("rating").value;
      const suggestions = document.getElementById("suggestions").value.trim();
      const reviews = document.getElementById("reviews").value.trim();

      // Validate name
      if (name === "") {
        alert("Please enter your name.");
        return;
      }

      // Validate email (simple regex)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Validate mobile (10-digit)
      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }

      // Validate choices
      const choices = document.querySelectorAll("input[name='choices']:checked");
      if (choices.length === 0) {
        alert("Please select at least one food preference.");
        return;
      }

      // Validate review
      if (reviews.length < 10) {
        alert("Please write a more detailed review (at least 10 characters).");
        return;
      }

      // If everything is valid
      alert("✅ Thank you! Your review has been submitted successfully.");
      form.reset();
    });
  });

