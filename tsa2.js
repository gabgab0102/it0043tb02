function animate_box(day) {
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const color = getDayColor(day);
    box2.style.backgroundColor = color;
    box2.style.transform = 'translate(-50%, -150%) scale(1)';
    box1.style.display = 'flex'
    box2.style.display = 'flex';
    setTimeout(() => {
        box2.style.transform = 'translate(-50%, -50%) scale(1)';
        box1.style.transform = 'translate(-50%, 150%) scale(1)';
    }, 100);
    
    setTimeout(() => {
        box1.style.backgroundColor = color;
        box1.style.transform = 'translate(-50%, -150%) scale(1)';
    }, 600);

    setTimeout(() => {
        box1.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 900);
}

function getDayColor(day) {
    switch (day) {
        case 'Monday':
            return '#493f6e';
        case 'Tuesday':
            return '#5483b3';
        case 'Wednesday':
            return '#854f8c';
        case 'Thursday':
            return '#f3cdbf';
        case 'Friday':
            return '#3d4633';
        case 'Saturday':
            return '#052659';
        case 'Sunday':
            return '#ba96c1';
        default:
            return '#493f6e';
    }
}