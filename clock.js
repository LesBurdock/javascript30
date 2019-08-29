
// const secondHand = document.querySelector('.sec-hand');
// const minuteHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

function setDate(){
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60) *360)+90;
	document.querySelector('.sec-hand').style.transform = `rotate(${secondsDegrees}deg)`;


	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes/60) *360)+90;
	document.querySelector('.min-hand').style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours/12) *360)+90;
	document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
	
}

setInterval(setDate,1000);



