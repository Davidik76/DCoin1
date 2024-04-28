function changeSize(button) {
            button.style.transform = 'scale(1.02)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        }

let clicker_span = 0;

const clicker_image = document.getElementById('clicker_image');
const clicker_spanDisplay = document.getElementById('clicker_span');

clicker_image.addEventListener('click', function() {
clicker_span++;
clicker_spanDisplay.textContent = + clicker_span;
});

function boost_modal() {
    var boost_modal = document.getElementById("boost_modal");
    boost_modal.classList.add("flex");
}

function showDiv() {
            var div = document.getElementById("myDiv");
            div.style.display = "flex"; 
        }

function hideDiv() {
            var div = document.getElementById("myDiv");
            div.style.display = "none"; 
        }



// telegram Web App

var WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

// var BackButton = WebApp.BackButton;

// BackButton.show();

// BackButton.onClick(function() {
//     WebApp.showAlert("BackButton clicked");
//     BackButton.hide();
// });
// WebApp.onEvent('backButtonClicked', function() {
//     let clicker_span = 1000;
// });