const select = document.querySelector("select");

select.addEventListener("change", (e) => {
  document.body.style.backgroundColor = e.currentTarget.value;
});
