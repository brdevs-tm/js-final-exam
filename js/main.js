const user = document.querySelector(".user");
const userDropdown = document.querySelector(".user-dropdown");
const numberInput = document.querySelector("#number-input");
const formSubmit = document.querySelector(".form-submit");
const studentEditForm = document.querySelector(".student-edit-form");

user.addEventListener("click", (event) => {
  event.stopPropagation();
  userDropdown.classList.toggle("user-dropdown-show");
});

userDropdown.addEventListener("click", (event) => {
  event.stopPropagation();
});

window.addEventListener("click", () => {
  if (userDropdown.classList.contains("user-dropdown-show")) {
    userDropdown.classList.remove("user-dropdown-show");
  }
});

/* Phone Number REGEX */

function validateUzbekistanPhoneNumber(phoneNumber) {
  const uzbekistanPhoneNumberRegex =
    /^(33|88|77|90|91|93|94|95|97|98|99)\d{7}$/;
  return uzbekistanPhoneNumberRegex.test(phoneNumber);
}

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const phoneNumberValue = numberInput.value;
  if (validateUzbekistanPhoneNumber(phoneNumberValue)) {
  } else {
    alert(
      `Error: phone number! If you find an error in any mode, send a pic of error to my telegram It's my telegram account: "https//t.me/br_power"`
    );
  }
});
