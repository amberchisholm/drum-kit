
function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return;//will stop the function from running all together
	audio.currentTime = 0;//rewinds audio to the beginning
	audio.play();
	key.classList.add('playing');//adds the CSS class to get the cool effects
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;//skip it if it's not a transform
	this.classList.remove('playing');
}//this function removes the CSS transition so it doesn't get stuck permanently

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//each key gets an Event Listener added to it (which is 'transitionend')....and when the transition ends, we will remove it 

window.addEventListener('keydown', playSound);