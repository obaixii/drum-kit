window.addEventListener("keydown", function (e) {
    // e.key - Returns Pressed Key Value
    // e.keyCode - Returns Pressed Key Value Code - (deprecated)

    // console.log(e); // Returns complete keyboardEvent object

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) {
        return //stops if there is no audio to corresponding key
    }
    audio.currentTime = 0 // Rewinds to the start
    audio.play(); // Plays Audio

    // Adds Class for Transition
    key.classList.add('playing');

    // Removes Transition's Class through SetTimeout Function
    setTimeout(() => {
        key.classList.remove('playing');
    }, 100)

    function removeTransition(e) {
        // if (e.propertyName !== 'transform') return;
        // e.target.classList.remove('playing');
        console.log(e);
    }
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', (e) => {
        console.log(e);
    }));
});

