
const number = document.getElementById('counter');
let ii = 0;
let startStop = 5;

// counting up
countingUp()
function countingUp(input = 1){
    if (startStop === 5){
        setTimeout(countingUp, 1000);
        ii += input
        number.innerHTML = ii;
    }
}

// add + button
const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', () => {
    ii += 1;
    number.innerHTML = ii;
})

// add - button
const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', () => {
    ii -= 1;
    number.innerHTML = ii;
})

// pause or resume
const pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', () => {
    if(startStop === 5){
        startStop *= -1
        pauseButton.innerText = 'resume'
    } else {
        startStop *= -1
        pauseButton.innerText = 'pause'
        countingUp()
    }
})

// remove div
const commentsDiv = document.querySelector('div');
commentsDiv.remove()
// add new div
const newDiv = document.createElement('div');
document.querySelector('.likes').appendChild(newDiv);



// add paragraph to div
const addParagraph = () => {
    const heartDiv = document.querySelector("div")
    const heartString = document.createElement('p')
    heartDiv.insertBefore(heartString, heartDiv.firstChild)
    heartString.textContent = `You liked number ${ii}!`
};

// create click event for heartButton
const heartButton = document.getElementById('heart');
heartButton.addEventListener('click', () => {
    addParagraph();
})



