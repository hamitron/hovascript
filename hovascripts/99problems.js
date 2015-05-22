

function populateArrayofProblems() {
	problems = new Array();
	problems.name = 'problems'
	for (i = 1; i < 100; i++) {
		problems.push(i);
	};
	return problems;
}

function setAdditionalProblem(problem_name) {
	if (isNaN(problem_name)) {
		alert("I've got " + String(problems.length) + " " + problems.name + ", but a " + problem_name + " ain't " + String(problems[0]));		}
		else {
			problems.push(parseInt(name))
		};
}

function hitMe(){
	populateArrayofProblems();
	setAdditionalProblem("bitch");
}

hitMe();