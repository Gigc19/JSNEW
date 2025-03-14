const ArrowLeft = document.getElementById("arrowLeft");
const ArrowRight = document.getElementById("arrowRight");
const MainContent = document.getElementById("SliderContent");
let sliderIndex = 0;

const dataArray = [
  {
    id: 1,
    imgUrl:
      "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "image tite 1",
  },
  {
    id: 2,
    imgUrl:
      "https://thumbs.dreamstime.com/z/majestic-scene-beautiful-hot-air-balloon-drifting-over-marvellous-picturesque-landscape-unique-perspective-world-s-beauty-343696591.jpg",
    title: "image title 2",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "image tite 3",
  },
  {
    id: 4,
    imgUrl:
      "https://thumbs.dreamstime.com/z/majestic-scene-beautiful-hot-air-balloon-drifting-over-marvellous-picturesque-landscape-unique-perspective-world-s-beauty-343696591.jpg",
    title: "image tite 4",
  },
];
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
  const titleEl = document.createElement("h2");
  titleEl.textContent = item.title;
  return titleEl;
}
function setSlider() {
  MainContent.innerHTML = " ";
  const slideItem = DivTag();
  const imgItem = ImgTag(dataArray[sliderIndex]);
  const titleItem = titleTag(dataArray[sliderIndex]);

  slideItem.appendChild(imgItem);
  slideItem.appendChild(titleItem);
  MainContent.appendChild(slideItem);
}
setSlider();

function LeftArrow() {
  if (sliderIndex === 0) {
    sliderIndex = dataArray.length - 1;
    setSlider();
    return;
  }
  sliderIndex--;
  setSlider();
}
function RightArrow() {
  if (sliderIndex === dataArray.length - 1) {
    sliderIndex = 0;
    setSlider();
    return;
  }
  sliderIndex++;
  setSlider();
}
ArrowLeft.addEventListener("click", LeftArrow);
ArrowRight.addEventListener("click", RightArrow);

setInterval(() => {
  RightArrow();
}, 4000);

const FormEl = document.getElementById("formElement");

FormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};
  const UsernameValue = document.getElementById("UserNameField").value;
  if (UsernameValue == "") {
    errors.usernmae = "username Field Cannot be Empty";
  }
  const Password1 = document.getElementById("PasswordField").value;
  const Password2 = document.getElementById("repeateyourField").value;
  if (Password1 == "") {
    errors.password = "password Field Cannot be Empty";
  }
  if (Password1 !== Password2) {
    errors.Password2 = "Passwords do not match";
  }
  let gender = false;

  this.querySelectorAll('[name="gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });
  if (!gender) {
    errors.gender = "please select your Gender";
  }
  const CheckBox = document.getElementById("agreeCheck").checked;
  if (CheckBox === false) {
    errors.check = "you must agree our conditions";
  }
  console.log(errors);

  this.querySelectorAll(".errorText").forEach((el) => {
    el.textContent = " ";
  });

  for (let key in errors) {
    console.log(key);

    let perrorElement = document.getElementById("errors-" + key);
    console.log(perrorElement);
    if (perrorElement) {
      perrorElement.textContent = errors[key];
    }
  }
});
let errors = {
  check: "you must agree our conditions",
  gender: "please select your Gender",
  password: "password Field Cannot be Empty",
  usernmae: "username Field Cannot be Empty",
};
