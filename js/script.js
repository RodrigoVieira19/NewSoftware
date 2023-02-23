"use strict";
// Accordion-list toggle
// let faq = document.querySelectorAll(".faq");

// faq.forEach((listElement) => {
//   listElement.addEventListener("click", () => {
//     if (listElement.classList.contains("active")) {
//       listElement.classList.remove("active");
//     } else {
//       faq.forEach((listE) => {
//         listE.classList.remove("active");
//       });
//       listElement.classList.toggle("active");
//     }
//   });
// });

// Segunda maneira
let faqs = document.querySelectorAll(".faq");

faqs.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    if (listElement.classList.contains("active")) {
      listElement.classList.remove("active");
    } else {
      faqs.forEach((listE) => {
        listE.classList.remove("active");
      });
      listElement.classList.toggle("active");
    }
  });
});

let containerFAQ = document.querySelectorAll(".container-faq");

// Change TEXT from section "PLAN"
let button = document.querySelector(".plan-two a");
function myFunction(x) {
  if (x.matches) {
    button.textContent = "Explore more plans";
  } else {
    console.log("loading...");
  }
}
//resolution
let x = window.matchMedia("(max-width: 900px)");
myFunction(x);
