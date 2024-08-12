
// Script para FAQs
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faq.classList.add("active");
    }
  });
});



function toggleContent(button) {
  var card = button.parentElement;
  var moreContent = card.querySelector(".more-content");

  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
    button.textContent = "Mostrar Menos";
  } else {
    moreContent.style.display = "none";
    button.textContent = "Continuar Lendo";
  }
}
