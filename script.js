let a = 1;
let clickCount = localStorage.getItem('clickCount') || 0;
const clickBtn = document.getElementById('clickBtn');
const clickCountDisplay = document.getElementById('clickCount');

clickCountDisplay.textContent = `💎 ${clickCount}`;

clickBtn.addEventListener('click', () => {
  clickCount++;
  localStorage.setItem('clickCount', clickCount);
  clickCountDisplay.textContent = `💎 ${clickCount}`;
});
    

document.getElementById('tg').addEventListener('submit', function(e) {
  e.preventDefault();
  var val = document.getElementById('elem1').value;
  if (clickCount >= val && val >= 10000) {
  clickCount-=val; 
  alert('Заявка успешно отправлена');
  localStorage.setItem('clickCount', clickCount);
  clickCountDisplay.textContent = `💎 ${clickCount}`; 
} else {
  alert('Ошибка');
}})

// Сначала скрываем див с классом "div3" при загрузке страницы
document.querySelector(".dialog").style.display = "none";

// По прошествии 1 минуты показываем див с классом "div3"
setTimeout(() => {
    document.querySelector(".dialog").style.display = "block";
}, 60000); // 60000 миллисекунд = 1 минута