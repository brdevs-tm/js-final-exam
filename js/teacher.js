const user = document.querySelector(".user");

const userDropdown = document.querySelector(".user-dropdown");

user.addEventListener("click", (event) => {
  event.stopPropagation();
  userDropdown.classList.toggle("user-dropdown-show");
});

userDropdown.addEventListener("click", (event) => {
  event.stopPropagation;
});

window.addEventListener("click", () => {
  if (userDropdown.classList.contains("user-dropdown-show")) {
    userDropdown.classList.remove("user-dropdown-show");
  }
});
