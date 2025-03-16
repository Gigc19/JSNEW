const dataArray = [
  {
    id: 1,
    imgUrl:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    imgTitle: "Image Title 1",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    imgTitle: "Image Title 2",
  },
  {
    id: 3,
    imgUrl:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    imgTitle: "Image Title 3",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    imgTitle: "Image Title 4",
  },
];

const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const MainContent = document.getElementById("sliderContent");
const formEl = document.getElementById("formElement");
let sliderIndex = 0;

function DivTag() {
  const divEl = document.createElement("div");
  return divEl;
}
function ImgTag(item) {
  const tagEl = document.createElement("img");
  tagEl.src = item.imgUrl;
  return tagEl;
}
function titleTag(item) {
  const TitleEl = document.createElement("h2");
  TitleEl.textContent = item.imgTitle;
  return TitleEl;
}

function setSlider() {
  MainContent.innerHTML = " ";
  const slideItem = DivTag();
  const ImgItem = ImgTag(dataArray[sliderIndex]);
  const titleItem = titleTag(dataArray[sliderIndex]);
  slideItem.appendChild(ImgItem);
  slideItem.appendChild(titleItem);
  MainContent.appendChild(slideItem);
}
setSlider();

function RightArrow() {
  if (sliderIndex === dataArray.length - 1) {
    sliderIndex = 0;
    setSlider();
    return;
  }
  sliderIndex++;
  setSlider();
}
function LeftArrow() {
  if (sliderIndex === 0) {
    sliderIndex = dataArray.length - 1;
    setSlider();
    return;
  }
  sliderIndex--;
  setSlider();
}
arrowLeft.addEventListener("click", LeftArrow);
arrowRight.addEventListener("click", RightArrow);

setInterval(() => {
  RightArrow();
}, 3000);

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = {};
  const usernameValue = document.getElementById("usernameField").value;
  if (usernameValue === "") {
    errors.username = "username Field cannot be empty";
  }
  const pass1 = document.getElementById("passwordField").value;
  const pass2 = document.getElementById("passwordField2").value;
  if (pass1 === "") {
    errors.password = "password field cannot be empty";
  }
  if (pass1 !== pass2) {
    errors.password2 = "Passwords do not match";
  }
  let gender = false;
  this.querySelectorAll('[name="gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });
  if (gender === false) {
    errors.gender = "please Select  your gender";
  }
  const CheckBox = document.getElementById("agreecheck").checked;
  if (!CheckBox) {
    errors.check = "you must agree our terms and conditions";
  }
  console.log(errors);
  this.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let key in errors) {
    console.log(key);
    let pErrorElement = document.getElementById("error-" + key);
    console.log(pErrorElement);
    if (pErrorElement) {
      pErrorElement.textContent = errors[key];
    }
  }
});
// let errors = {
//   check: "you must agree our terms and conditions",
//   gender: "please Select  your gender",
//   password: "password field cannot be empty",
//   username: "username Field cannot be empty",
// };
