

const clickSound = new Audio('boop.mp3');

const display = document.getElementById('display');

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }

function appendToDisplay(input) {
    playClickSound();
    display.value += input;

}

function calculate() {
    playClickSound();
    try{
        display.value = eval(display.value);
    }
    catch(Error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    playClickSound();
    display.value = "";
}

function pressButton(button) {
    const img = button.querySelector('img');
    img.src = button.getAttribute('data-pressed');
  }
  
  function releaseButton(button) {
    const img = button.querySelector('img');
    img.src = button.getAttribute('data-unpressed');
  }
  