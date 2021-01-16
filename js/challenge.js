let counterDisplayElem = document.getElementById('counter');
const counterMinusElem = document.getElementById('minus');
const counterPlusElem = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const commentForm = document.getElementById("comment-form");
let count = 0
let increase = 1

document.addEventListener("DOMContentLoaded", () => {
    counter()
    commentForm.addEventListener("submit", createComment);
    counterPlusElem.addEventListener("click", upper);
    counterMinusElem.addEventListener("click", downer);
    heart.addEventListener("click", haato);
    pause.addEventListener("click", pasu);
  });

  const createComment = event => {
    event.preventDefault();
    const commentImput = document.getElementById("comment-input");
    const newComment = document.createElement("li");
    newComment.innerText = commentImput.value;
    appendNewComment(newComment);
    event.target.reset();
  };
  
  const appendNewComment = comment => {
    document.getElementById("list").appendChild(comment);
  };

  const upper = event => {
    count++;
    updateDisplay(); 
  }

  const downer = event => {
    count--;
    updateDisplay(); 
  }

 const haato = event => {
  const newComment = document.createElement("li");
  newComment.innerText = count
  appendNewComment(newComment);
  updateDisplay();
}

const pasu = event => {
  if (increase == 0){
    increase = 1
    pause.innerText = "pause"
    counter()
  } else if (increase == 1){
  increase = 0
  pause.innerText = "resume"
}}

  function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

function counter(){ 
  updateDisplay();
  count++;
  if (increase == 1){
  setTimeout(() => { counter(); }, 1000);
}}




  
