// JavaScript functionality for the Torah lesson website

// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  // Add active class to current page navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Form functionality
function saveForm() {
  const form = document.getElementById("focusForm");
  if (form) {
    const formData = new FormData(form);
    const data = {};

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    localStorage.setItem("torahLessonForm", JSON.stringify(data));
    alert("הטופס נשמר בהצלחה!");
  }
}

function clearForm() {
  if (confirm("האם אתה בטוח שברצונך לנקות את הטופס?")) {
    const form = document.getElementById("focusForm");
    if (form) {
      form.reset();
      localStorage.removeItem("torahLessonForm");
      alert("הטופס נוקה בהצלחה!");
    }
  }
}

function loadForm() {
  const savedData = localStorage.getItem("torahLessonForm");
  if (savedData) {
    const data = JSON.parse(savedData);
    const form = document.getElementById("focusForm");
    if (form) {
      Object.keys(data).forEach((key) => {
        const element = form.querySelector(`[name="${key}"]`);
        if (element) {
          element.value = data[key];
        }
      });
    }
  }
}

function printForm() {
  window.print();
}

// Sermon functionality
function saveSermon() {
  const sermonData = {
    outstandingTrait: document.getElementById("outstanding_trait")?.value || "",
    characteristicMoment:
      document.getElementById("characteristic_moment")?.value || "",
    goodToContinue: document.getElementById("good_to_continue")?.value || "",
    selectedVerse: document.getElementById("selected_verse")?.value || "",
    verseExplanation: document.getElementById("verse_explanation")?.value || "",
    personalMessage: document.getElementById("personal_message")?.value || "",
  };

  localStorage.setItem("torahLessonSermon", JSON.stringify(sermonData));
  alert("הדרשה נשמרה בהצלחה!");
}

function clearSermon() {
  if (confirm("האם אתה בטוח שברצונך לנקות את הדרשה?")) {
    const sermonFields = [
      "outstanding_trait",
      "characteristic_moment",
      "good_to_continue",
      "selected_verse",
      "verse_explanation",
      "personal_message",
    ];

    sermonFields.forEach((fieldId) => {
      const element = document.getElementById(fieldId);
      if (element) {
        element.value = "";
      }
    });

    localStorage.removeItem("torahLessonSermon");
    alert("הדרשה נוקתה בהצלחה!");
  }
}

function printSermon() {
  window.print();
}

function loadSermon() {
  const savedData = localStorage.getItem("torahLessonSermon");
  if (savedData) {
    const data = JSON.parse(savedData);
    Object.keys(data).forEach((key) => {
      const element = document.getElementById(key);
      if (element) {
        element.value = data[key];
      }
    });
  }
}

// Quotes functionality
function printQuotes() {
  window.print();
}

function copyQuotes() {
  const quotesContent = document.querySelector(".form-container").innerText;
  navigator.clipboard
    .writeText(quotesContent)
    .then(() => {
      alert("הליקוט הועתק ללוח!");
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
      alert("שגיאה בהעתקת הליקוט");
    });
}

// Print page functionality
function printPage() {
  window.print();
}

// Auto-save functionality
function autoSave() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (form.id === "focusForm") {
          saveForm();
        } else if (window.location.pathname.includes("sermon")) {
          saveSermon();
        }
      });
    });
  });
}

// Initialize auto-save
document.addEventListener("DOMContentLoaded", function () {
  autoSave();

  // Load saved data
  if (window.location.pathname.includes("form")) {
    loadForm();
  } else if (window.location.pathname.includes("sermon")) {
    loadSermon();
  }
});

// Add smooth animations
function addAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll(
    ".quote-section, .form-section, .timeline-step, .feature-card"
  );
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Initialize animations
document.addEventListener("DOMContentLoaded", addAnimations);

// Add keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Ctrl/Cmd + S to save
  if ((e.ctrlKey || e.metaKey) && e.key === "s") {
    e.preventDefault();
    if (window.location.pathname.includes("form")) {
      saveForm();
    } else if (window.location.pathname.includes("sermon")) {
      saveSermon();
    }
  }

  // Ctrl/Cmd + P to print
  if ((e.ctrlKey || e.metaKey) && e.key === "p") {
    e.preventDefault();
    window.print();
  }
});

// Add responsive navigation
function toggleMobileNav() {
  const nav = document.querySelector(".navigation");
  if (nav) {
    nav.classList.toggle("mobile-open");
  }
}

// Add mobile navigation if needed
if (window.innerWidth <= 768) {
  const nav = document.querySelector(".navigation");
  if (nav) {
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "☰";
    toggleButton.className = "mobile-nav-toggle";
    toggleButton.onclick = toggleMobileNav;
    nav.insertBefore(toggleButton, nav.firstChild);
  }
}
