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
  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});

const PaswwordEl = document.getElementById("passwordField");
const icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  if (PaswwordEl.type === "password") {
    PaswwordEl.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    PaswwordEl.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

const emailEl = document.getElementById("email");

function emailValidation() {
  const emailValue = document.getElementById("email").value;
  const ErrrEmail = document.getElementById("text-email");
  let Emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailValue.match(Emailpattern)) {
    ErrrEmail.textContent = "your email is valid";
    ErrrEmail.style.color = "green";
  } else {
    ErrrEmail.textContent = "your email is invalid";
    ErrrEmail.style.color = "red";
  }
  if (emailValue === "") {
    ErrrEmail.textContent = "";
  }
}
emailEl.addEventListener("keyup", emailValidation);

const lotterpromise = new Promise((reslove, reject) => {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      reslove();
    } else {
      reject();
    }
  }, 3000);
});
lotterpromise
  .then(() => console.log("you win"))
  .catch(() => console.log("you Lost"));

const waitFnc = function (seconds) {
  return new Promise(function (reslove) {
    setTimeout(reslove, seconds * 1000);
  });
};
waitFnc(2)
  .then(() => {
    console.log("2 second later");
    return waitFnc(3);
  })
  .then(() => {
    console.log("+ 3 seconds later");
    return waitFnc(6);
  })
  .then(() => {
    console.log("6 seconds later");
    return;
  });

const waitFnc2 = function (seconds) {
  return new Promise(function (reslove) {
    setTimeout(reslove, seconds * 1000);
  });
};
const imgContainer = document.querySelector(".image");
let currentImg;

const CreateImg = function (ImagePath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    imgEl.src = ImagePath;
    imgEl.addEventListener("load", function () {
      imgContainer.appendChild(imgEl);
      resolve(imgEl);
    });
    imgEl.addEventListener("error", function () {
      reject("image not found");
    });
  });
};
CreateImg(
  "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
)
  .then((image) => {
    currentImg = image;
    return waitFnc2(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return CreateImg(
      "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
    );
  })
  .then((imagesecond) => {
    currentImg = imagesecond;
    return waitFnc2(3);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((errorText) => {
    let p = document.createElement("p");
    p.textContent = "Image not found";
    imgContainer.appendChild(p);
  });
