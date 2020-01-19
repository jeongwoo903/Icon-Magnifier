window.addEventListener("DOMContentLoaded", () => {
  const magnifierElem = document.querySelector("#magnifier");
  const magInsideElem = document.querySelector("#mag-inside circle");

  window.addEventListener("mousemove", e => {
    console.log(e.clientX);
    console.log(e.clientY);
    magnifierElem.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    magInsideElem.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});
