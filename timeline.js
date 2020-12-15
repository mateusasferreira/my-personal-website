const stepsList = document.querySelector(".steps-list");

const progressBarSteps = document.querySelectorAll (".progress-bar-step");

const progressBarStepsArr = Array.from(progressBarSteps);

progressBarStepsArr.forEach(function(step){
	step.addEventListener("click", function(){
		let index = progressBarStepsArr.indexOf(step);
		changeStep(index);
		let fulfilledSteps = progressBarStepsArr.slice(0, index + 1);
		fulfilledSteps.forEach(function(fulfilledStep){
			fulfilledStep.classList.add("fulfill");	
		})
		let unfulfilledSteps = progressBarStepsArr.slice(index + 1, progressBarStepsArr.length + 1);
		unfulfilledSteps.forEach(function(unfulfilledStep){
			unfulfilledStep.classList.remove("fulfill")
		})
		
	})

})

function changeStep (i) {
	let operator = i * -100;
	stepsList.style.marginLeft = operator + "%";
}

/*function changeProgressBar (i, e){
	if (progressBarStepsArr.indexOf(e) < i)

		.classList.add("fulfill");
	}*/



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

