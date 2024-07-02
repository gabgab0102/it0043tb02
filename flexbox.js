let flexBox = document.querySelector('.flex-display');
let gapCounter = document.getElementById('gap-counter');
let growCounter1 = document.getElementById('grow-counter1')
let growCounter2 = document.getElementById('grow-counter2')
let growCounter3 = document.getElementById('grow-counter3')
let gapValue = 0;



function resetflexbox() {
    flexBox.style.justifyContent = 'flex-start';
    flexBox.style.alignItems = 'flex-start';
    flexBox.style.flexDirection = 'row';
    gapValue = 0;
    gapCounter.value = gapValue;
    flexBox.style.gap = `${gapValue}px`;
    growreset();
}

function GapButton() {
    gapValue += 1;
    gapCounter.value = gapValue;
    flexBox.style.gap = `${gapValue}px`;
}

let resetButton = document.querySelector('.reset .btn');
let gapButton = document.querySelector('.gap .btn');

resetButton.addEventListener('click', ResetFlexBox);
gapButton.addEventListener('click', GapButton);

function Row(){
    flexBox.style.flexDirection = "row";
}

function Column(){
    flexBox.style.flexDirection = "column";
}
function alignstart(){
    flexBox.style.alignItems = "start";
}
function aligncenter(){
    flexBox.style.alignItems = "center";
}
function alignend(){
    flexBox.style.alignItems = "end";

}

function justifystart(){
    flexBox.style.justifyContent = "start";
}
function justifycenter(){
    flexBox.style.justifyContent = "center";
}

function justifyend(){
    flexBox.style.justifyContent = "end";
}
function justifyaround(){
    flexBox.style.justifyContent = "space-around";
}

function justifybetween(){
    flexBox.style.justifyContent = "space-between";
}

function justifyevenly(){
    flexBox.style.justifyContent = "space-evenly";
}
function growreset(){
    const boxes = document.querySelectorAll('.flex-display .box');
    boxes.forEach(box => box.style.flexGrow = 0);
    growcounter1.value = 0;
    growcounter2.value = 0;
    growcounter3.value = 0;
}

function growall(){
    const boxes = document.querySelectorAll('.flex-display .box');
    boxes.forEach(box => box.style.flexGrow = 1);
    growCounter1.value = 1;
    growCounter2.value = 1;
    growCounter3.value = 1;
}

function box1(){
    const box = document.getElementById('box-one');
    box.style.flexGrow = parseInt(box.style.flexGrow || 0) + 1;
    growcounter1.value = box.style.flexGrow;
    document.getElementById('growcounter1').value = box.style.flexGrow;

}

function box2(){
    const box = document.getElementById('box-two');
    box.style.flexGrow = parseInt(box.style.flexGrow || 0) + 1;
    growcounter2.value = box.style.flexGrow;
    document.getElementById('growcounter2').value = box.style.flexGrow;

}

function box3(){
    const box = document.getElementById('box-three');
    box.style.flexGrow = parseInt(box.style.flexGrow || 0) + 1;
    growcounter3.value = box.style.flexGrow;
    document.getElementById('growcounter3').value = box.style.flexGrow;
}

document.querySelector('.flex-grow .reset').addEventListener('click', growreset);
document.querySelector('.flex-grow .grow').addEventListener('click', growall);
document.querySelector('.flex-grow .one').addEventListener('click', box1);
document.querySelector('.flex-grow .two').addEventListener('click', box2);
document.querySelector('.flex-grow .three').addEventListener('click', box3);
