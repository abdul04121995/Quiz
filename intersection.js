export function observing() {
  let options = {
    // rootMargin: "-20px",
    threshold: 0.25,
  };
  let io = new IntersectionObserver(coloring, options);
  let holderEls = document.querySelectorAll(".holder");

  function coloring(entries) {
    entries.forEach((element) => {
      if (element.isIntersecting) {
        element.target.classList.add("red");
      } else {
        element.target.classList.remove("red");
      }
    });
  }
  holderEls.forEach((h) => io.observe(h));
}
