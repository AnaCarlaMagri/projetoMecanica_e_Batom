const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  if (faq.classList.contains("active")) {
    faq.classList.remove("active");
  } else {
    faq.classList.add("active");
  }
});
