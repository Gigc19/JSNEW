let MainWraper = document.getElementById("MainWraper");
let Overlay = document.getElementById("overlay");
let Conentpost = document.getElementById("ContentPost");
let CloseIcon = document.getElementById("close");
let AddPost = document.getElementById("AddPost");
let OverLayadd = document.getElementById("overlayadd");
let FormTag = document.getElementById("FormTag");

function ajaxPost(url) {
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      responseData.forEach((element) => {
        CreatePostDiv(element);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
ajaxPost("https://jsonplaceholder.typicode.com/posts");

function CreatePostDiv(item) {
  let divEl = document.createElement("div");
  divEl.classList.add("PostContainer");
  divEl.setAttribute("dataId", item.id);

  let title1 = document.createElement("h3");
  let title2 = document.createElement("h2");
  let Btn = document.createElement("button");
  Btn.setAttribute("btnId", item.id);

  title1.textContent = `ID:${item.id}`;
  title2.textContent = `Title:${item.title}`;
  Btn.textContent = "Delete This Post";

  divEl.addEventListener("click", function () {
    Overlay.classList.add("active");
    let NewId = this.getAttribute("dataId");
    let OtherNewLink = `https://jsonplaceholder.typicode.com/posts/${NewId}`;
    console.log(OtherNewLink);
    fetch(OtherNewLink)
      .then((response) => response.json())
      .then((newData) => {
        let pDescr = document.createElement("p");
        pDescr.textContent = newData.body;
        Conentpost.appendChild(pDescr);
      });
  });
  CloseIcon.addEventListener("click", function () {
    Overlay.classList.remove("active");
    Conentpost.innerHTML = " ";
  });
  Btn.addEventListener("click", function (event) {
    event.stopPropagation();
    let deletebtn = this.getAttribute("btnId");
    let NewLink = `https://jsonplaceholder.typicode.com/posts/${deletebtn}`;
    fetch(NewLink, {
      method: "DELETE",
    }).then(() => divEl.remove());
  });
  divEl.appendChild(title1);
  divEl.appendChild(title2);
  divEl.appendChild(Btn);

  MainWraper.appendChild(divEl);
}

AddPost.addEventListener("click", function () {
  OverLayadd.classList.add("activeOverlayadd");
});
FormTag.addEventListener("submit", function (ev) {
  ev.preventDefault();
  console.log(this[0].value);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: this[0].value,
      userId: 11,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      OverLayadd.classList.remove("activeOverlayadd");
      this[0].value = " ";
      CreatePostDiv(json);
      console.log(json);
    });
});
