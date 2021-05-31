const stepsList = document.querySelector(".steps-list");

const progressBarSteps = document.querySelectorAll (".progress-bar-step");

const progressBarStepsArr = Array.from(progressBarSteps);

progressBarStepsArr.forEach(function(step){
	step.addEventListener("click", function(){
		const index = progressBarStepsArr.indexOf(step);
		changeStep(index);
		const checkedSteps = progressBarStepsArr.slice(0, index + 1);
		checkedSteps.forEach(function(checkedStep){
			checkedStep.classList.add("active");	
		})
		const uncheckedSteps = progressBarStepsArr.slice(index + 1, progressBarStepsArr.length + 1);
		uncheckedSteps.forEach(function(uncheckedStep){
			uncheckedStep.classList.remove("active")
		})
		
	})

})

function changeStep (i) {
	const operator = i * -100;
	stepsList.style.marginLeft = operator + "%";
}


