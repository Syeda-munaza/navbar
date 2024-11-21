// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

  // JavaScript to handle additional interactivity for the navigation bar

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  // Optional: Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    dropdowns.forEach((dropdown) => {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      const dropbtn = dropdown.querySelector(".dropbtn");

      if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = "none";
      }
    });
  });

  // Add click event to dropdown buttons
  dropdowns.forEach((dropdown) => {
    const dropbtn = dropdown.querySelector(".dropbtn");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click from bubbling to document
      const isOpen = dropdownContent.style.display === "block";

      // Close all other dropdowns
      dropdowns.forEach((d) => {
        d.querySelector(".dropdown-content").style.display = "none";
      });

      // Toggle current dropdown
      dropdownContent.style.display = isOpen ? "none" : "block";
    });
  });
});
