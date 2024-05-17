let a = 1;
let clickCount = localStorage.getItem('clickCount') || 0;
const clickBtn = document.getElementById('clickBtn');
const clickCountDisplay = document.getElementById('clickCount');
const progress_bar = document.getElementById('progress-bar');

clickCountDisplay.textContent = `💎 ${clickCount}`;

clickBtn.addEventListener('click', () => {
  if (progress_bar.value>=1) {
    clickCount++;
  progress_bar.value-=1;
  localStorage.setItem('clickCount', clickCount);
  clickCountDisplay.textContent = `💎 ${clickCount}`;
  } else {
    test65();
  }
});

document.getElementById('next').addEventListener('click', function(e) {
  e.preventDefault();
  var val = document.getElementById('elem1').value;
  if (clickCount >= val && val >= 1) {
    alert('Заявка успешно отправлена');
  clickCount-=val; 
  localStorage.setItem('clickCount', clickCount);
  clickCountDisplay.textContent = `💎 ${clickCount}`; 
} else {
  alert('ошибка');
}})

document.querySelector(".dialog").style.display = "none";

function div16() {
  document.querySelector(".dialog").style.display = "block";
}

function closeModal() {
  document.querySelector(".dialog").style.display = "none";
}

// Уведомления

let g = 1;

function div18() {
  g = 2;
  5000
  g = 1;
}

const buttonnot = document.querySelector(".notibutt"),
  toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

function test67() {
  document.querySelector(".div20").style.display = "block";
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
      document.querySelector(".div20").style.display = "none";
  }, 5000);

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
};

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
  document.querySelector(".div20").style.display = "none";


  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);

  toast.classList.remove("active");
   document.querySelector(".div20").style.display = "none";
});

 

// crossbar


  toast1 = document.querySelector(".toast1");
(closeIcon1 = document.querySelector(".close1")),
  (progress1 = document.querySelector(".progress1"));

let timer11, timer21;

function test65() {
  document.querySelector(".div201").style.display = "block";
  toast1.classList.add("active1");
  progress1.classList.add("active1");

  timer11 = setTimeout(() => {
    toast1.classList.remove("active1");
      document.querySelector(".div201").style.display = "none";
  }, 5000); //1s = 1000 milliseconds

  timer21 = setTimeout(() => {
    progress1.classList.remove("active1");
  }, 5300);
};

closeIcon1.addEventListener("click", () => {
  toast1.classList.remove("active1");
    document.querySelector(".div201").style.display = "none";

  setTimeout(() => {
    progress1.classList.remove("active1");
  }, 300);

  clearTimeout(timer11);
  clearTimeout(timer21);

    toast1.classList.remove("active1");
   document.querySelector(".div201").style.display = "none";
});