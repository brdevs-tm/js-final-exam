const user = document.querySelector(".user");
const userDropdown = document.querySelector(".user-dropdown");
const numberInput = document.querySelector("#number-input");
const teacherEditModal = document.querySelector(".edit-teacher-modal");
const studentEditModal = document.querySelector(".edit-student-modal");
const teacherAddModal = document.querySelector(".add-teacher-modal");
const studentAddModal = document.querySelector(".add-student-modal");

const formSubmitBtn = document.querySelector(".form-submit");
const editStudentButton = document.querySelectorAll(".edit-student");
const editTeacherButton = document.querySelectorAll(".edit-teacher");
const addStudentBtn = document.querySelectorAll(".add-student");
// const addTeacherBtn = document.querySelector(".add-teacher");

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

editStudentButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    studentEditModal.classList.add("show-modal");
  });
});

editTeacherButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    teacherEditModal.classList.add("show-modal");
  });
});

addStudentBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    studentAddModal.classList.add("show-modal");
  });
});

/* Phone Number REGEX */

function validateUzbekistanPhoneNumber(phoneNumber) {
  const uzbekistanPhoneNumberRegex =
    /^(33|88|77|90|91|93|94|95|97|98|99)\d{7}$/;
  return uzbekistanPhoneNumberRegex.test(phoneNumber);
}

formSubmitBtn.addEventListener("click", () => {
  const phoneNumberValue = numberInput.value;
  if (validateUzbekistanPhoneNumber(phoneNumberValue)) {
    studentEditForm.classList.remove("show-modal");
  } else {
    alert(
      `Error: phone number! If you find an error in any mode, send a pic of error to my telegram It's my telegram account: "https//t.me/br_power"`
    );
  }
});
