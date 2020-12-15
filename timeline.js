var stepsList = document.querySelector(".steps-list");

var progressBarSteps = document.querySelectorAll (".progress-bar-step");

var progressBarStepsArr = Array.from(progressBarSteps);

progressBarStepsArr.forEach(function(step){
	step.addEventListener("click", function(){
		let index = progressBarStepsArr.indexOf(step);
		changeStep(index);})

})

function changeStep (i) {
	let operator = i * -100;
	stepsList.style.marginLeft = operator + "%";
}





/*
progressBarStepsArr[0].addEventListener("click", function(){
	stepsList.style.marginLeft = 0;	
	progressBarStepsArr[1].classList.remove("fulfill");
	progressBarStepsArr[2].classList.remove("fulfill");
	progressBarStepsArr[3].classList.remove("fulfill");
});

progressBarStepsArr[1].addEventListener("click", function(){
	stepsList.style.marginLeft = "-100%";
	progressBarStepsArr[1].classList.add("fulfill");
	progressBarStepsArr[2].classList.remove("fulfill");
	progressBarStepsArr[3].classList.remove("fulfill");
});

progressBarStepsArr[2].addEventListener("click", function(){
	stepsList.style.marginLeft = "-200%";
	progressBarStepsArr[1].classList.add("fulfill");
	progressBarStepsArr[2].classList.add("fulfill");
	progressBarStepsArr[3].classList.remove("fulfill");

});

progressBarStepsArr[3].addEventListener("click", function(){
	stepsList.style.marginLeft = "-300%";
	progressBarStepsArr[1].classList.add("fulfill");
	progressBarStepsArr[2].classList.add("fulfill");
	progressBarStepsArr[3].classList.add("fulfill");
});
*/

