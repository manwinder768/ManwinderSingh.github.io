let height = 45;

if (height >= 25) {
    console.log('We have a big one');
}
height = 46;
if (height >= 25) {
    console.log('We have a big one');
} else {
    console.log('We have a little one');
}
height = 47;
if (height >= 25) {
    console.log('We have a big one');
} else if (height >= 0) {
    console.log('We have a little one');
} else {
    console.log('We have a negative number or invalid number')
}

height = 'little';
switch (height) {
    case 'little':
        console.log('Switch: a little one is smaller than five');
        break;

    case ('big'):
        console.log('Switch: a big one is five or greater');
        break;

    default:
        console.log('We do not know about this one.')
}

window.onload = () => {
    const simpleBranchAction = document.getElementById('simpleBranchAction');
    const simpleBranchDisplay = document.getElementById('simpleBranchDisplay');

    simpleBranchAction.onclick = (event) => {
        let height = 46;
        if (height >= 25) {
            simpleBranchDisplay.textContent = 'We have a big one';
        } else {
            simpleBranchDisplay.textContent = 'We have a little one';
        }
    }

    const simpleIfElseDisplay = document.getElementById('simpleIfElseDisplay');
    const simpleIfElseAction = document.getElementById('simpleIfElseAction');
    simpleIfElseAction.onclick = () => {
        height = 47;
        if (height >= 25) {
            simpleIfElseDisplay.textContent = 'We have a big one';
        } else if (height >= 0) {
            simpleIfElseDisplay.textContent = 'We have a little one';
        } else {
            simpleIfElseDisplay.textContent = 'We have a negative number or invalid number';
        }
    }

    const switchDisplay = document.getElementById('switchDisplay');
    const switchAction = document.getElementById('switchAction');

    switchAction.onclick = () => {
        height = 'little';
        switch (height) {
            case 'little':
                switchDisplay.textContent = 'Switch: a little one is smaller than five';
                break;

            case ('big'):
                switchDisplay.textContent = 'Switch: a big one is five or greater';
                break;

            default:
                switchDisplay.textContent = 'We do not know about this one.';
        }
    }



}          