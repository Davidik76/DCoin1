let tg = window.Telegram.WebApp;
let a = 1;
let clickCount = localStorage.getItem('clickCount') || 0;
const balanceDisplay = document.getElementById('balancep');
const clickBtn = document.getElementById('clicker');
const clickCountDisplay = document.getElementById('clickCount');
const progress_bar = document.getElementById('progress-bar');

clickCountDisplay.textContent = `${clickCount}`;
balanceDisplay.textContent = `${clickCount}`;

tg.expand();

document.querySelector(".dialog").style.display = "none";


clickBtn.addEventListener('click', () => {
  if (progress_bar.value>=1) {
    clickCount++;
  progress_bar.value-=1;
  var valuebar = document.getElementById("progress-bar").value;
  var valuebartext = document.getElementById("momentvalue");
  valuebartext.innerHTML = valuebar;
  localStorage.setItem('clickCount', clickCount);
  clickCountDisplay.textContent = `${clickCount}`;
  } else {
    test65();
  }
});



let dostupno = document.getElementById('div98');

if (clickCount >= 100000) {
  dostupno.textContent = "доступно";
  dostupno.style.color = "#52D583";
  document.getElementById('div30').style.backgroundColor = "#1e2e2a";
  document.getElementById('voskl').style.backgroundColor = "#52D583";
  document.getElementById('voskl').style.color = "#ffffff";
  document.getElementById('next').style.backgroundColor = "#3A662A";
  document.getElementById('vivod_butt4').style.color = "white";
  }


  



function div16() {
  document.querySelector(".dialog").style.display = "block";
  let gold = clickCount / 10000;

  gold2 = Math.round(gold * 100) / 100;

  let skin = 1;

  let summprice = gold2 + skin;

  document.querySelector(".price23").textContent = `G ${summprice}`;


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

// const buttonnot = document.querySelector(".notibutt"),
//   toast = document.querySelector(".toast");
// (closeIcon = document.querySelector(".close")),
//   (progress = document.querySelector(".progress"));

// let timer1, timer2;

// function test67() {
//   document.querySelector(".div20").style.display = "block";
//   toast.classList.add("active");
//   progress.classList.add("active");

//   timer1 = setTimeout(() => {
//     toast.classList.remove("active");
//       document.querySelector(".div20").style.display = "none";
//   }, 5000);

//   timer2 = setTimeout(() => {
//     progress.classList.remove("active");
//   }, 5300);
// };

// closeIcon.addEventListener("click", () => {
//   toast.classList.remove("active");
//   document.querySelector(".div20").style.display = "none";


//   setTimeout(() => {
//     progress.classList.remove("active");
//   }, 300);

//   clearTimeout(timer1);
//   clearTimeout(timer2);

//   toast.classList.remove("active");
//    document.querySelector(".div20").style.display = "none";
// });

 

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


