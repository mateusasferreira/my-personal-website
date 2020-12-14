var stepsList = document.querySelector(".steps-list");

var progressBarSteps = document.querySelectorAll (".progress-bar-step");

var progressBarStepsArr = Array.from(progressBarSteps);

progressBarStepsArr[0].addEventListener("click", function(){
	stepsList.style.marginLeft = 0;
});

progressBarStepsArr[1].addEventListener("click", function(){
	stepsList.style.marginLeft = "-100%";
});

progressBarStepsArr[2].addEventListener("click", function(){
	stepsList.style.marginLeft = "-200%";
});

progressBarStepsArr[3].addEventListener("click", function(){
	stepsList.style.marginLeft = "-300%";
});


