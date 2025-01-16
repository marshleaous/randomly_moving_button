const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";

  // Create a new button
  // const newBtn = document.createElement("button");
  // newBtn.innerText = "Go to the Next Page";
  // newBtn.classList.add("navigate-btn");
  
  // // Add an event listener to the new button
  // newBtn.addEventListener("click", () => {
  //   window.location.href = "nextpage.html"; // Change this to your target page
  // });

  // Append the button to the wrapper
  wrapper.appendChild(newBtn);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
