const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const body = document.querySelector("body");

yesBtn.addEventListener("click", function () {
  sendMessage("Yes");
});

noBtn.addEventListener("mouseenter", function () {
  // Change position of the 'No' button on hover
  noBtn.style.top = `${
    Math.random() * (body.clientHeight - noBtn.clientHeight)
  }px`;
  noBtn.style.left = `${
    Math.random() * (body.clientWidth - noBtn.clientWidth)
  }px`;
});

function sendMessage(response) {
  if (response === "Yes") {
    alert("User responded: " + response);
  }
  // No alert for "No" response
}
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💗";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
