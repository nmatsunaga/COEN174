document.body.onload = function(){

	var height = window.screen.availHeight;

	if(height <= 800){

		document.getElementById("Schedule").style.fontSize = 11 + "px";
		document.getElementById("courseSummary").style.fontSize = 11 + "px"; 
	}

	document.getElementById("engineeringOneSection").style.display = "none";
	document.getElementById("studentDesignationSection").style.display = "none";
	document.getElementById("computingCompetencySection").style.display = "none";
	document.getElementById("calculusReadinessSection").style.display = "none";
	document.getElementById("APscoresSection").style.display = "none";
	document.getElementById("additionalCreditSection").style.display = "none";
}

function majorSelectionDisplay(){

	if(document.getElementById("majorSelectionSection").style.display == "none"){

		document.getElementById("majorSelectionSection").style.display = "block";
		document.getElementById("majorSelection").title = "Click to minimize";
		document.getElementById("majorSelectionImage").src = "minus.png";
	}
	else{

		document.getElementById("majorSelectionSection").style.display = "none";
		document.getElementById("majorSelection").title = "Click to expand";
		document.getElementById("majorSelectionImage").src = "add.png";
	}
}

document.getElementById("majorSelection").onclick = function(){

	majorSelectionDisplay();
}

function engineeringOneDisplay(){

	if(document.getElementById("engineeringOneSection").style.display == "none"){

		document.getElementById("engineeringOneSection").style.display = "block";
		document.getElementById("engineeringOne").title = "Click to minimize";
		document.getElementById("engineeringOneImage").src = "minus.png";
	}
	else{

		document.getElementById("engineeringOneSection").style.display = "none";
		document.getElementById("engineeringOne").title = "Click to expand";
		document.getElementById("engineeringOneImage").src = "add.png";
	}
}

document.getElementById("engineeringOne").onclick = function(){

	engineeringOneDisplay();
}

function studentDesignationDisplay(){

	if(document.getElementById("studentDesignationSection").style.display == "none"){

		document.getElementById("studentDesignationSection").style.display = "block";
		document.getElementById("studentDesignation").title = "Click to minimize";
		document.getElementById("studentDesignationImage").src = "minus.png";
	}
	else{

		document.getElementById("studentDesignationSection").style.display = "none";
		document.getElementById("studentDesignation").title = "Click to expand";
		document.getElementById("studentDesignationImage").src = "add.png";
	}
}

document.getElementById("studentDesignation").onclick = function(){

	studentDesignationDisplay();
}

function computingCompetencyDisplay(){

	if(document.getElementById("computingCompetencySection").style.display == "none"){

		document.getElementById("computingCompetencySection").style.display = "block";
		document.getElementById("computingCompetency").title = "Click to minimize";
		document.getElementById("computingCompetencyImage").src = "minus.png";
	}
	else{

		document.getElementById("computingCompetencySection").style.display = "none";
		document.getElementById("computingCompetency").title = "Click to expand";
		document.getElementById("computingCompetencyImage").src = "add.png";
	}
}

document.getElementById("computingCompetency").onclick = function(){

	computingCompetencyDisplay();
}

function calculusReadinessDisplay(){

	if(document.getElementById("calculusReadinessSection").style.display == "none"){

		document.getElementById("calculusReadinessSection").style.display = "block";
		document.getElementById("calculusReadiness").title = "Click to minimize";
		document.getElementById("calculusReadinessImage").src = "minus.png";
	}
	else{

		document.getElementById("calculusReadinessSection").style.display = "none";
		document.getElementById("calculusReadiness").title = "Click to expand";
		document.getElementById("calculusReadinessImage").src = "add.png";
	}
}

document.getElementById("calculusReadiness").onclick = function(){

	calculusReadinessDisplay();
}

function APscoresDisplay(){

	if(document.getElementById("APscoresSection").style.display == "none"){

		document.getElementById("APscoresSection").style.display = "block";
		document.getElementById("APscores").title = "Click to minimize";
		document.getElementById("APscoresImage").src = "minus.png";
	}
	else{

		document.getElementById("APscoresSection").style.display = "none";
		document.getElementById("APscores").title = "Click to expand";
		document.getElementById("APscoresImage").src = "add.png";
	}
}

document.getElementById("APscores").onclick = function(){

	APscoresDisplay();
}

function additionalCreditDisplay(){

	if(document.getElementById("additionalCreditSection").style.display == "none"){

		document.getElementById("additionalCreditSection").style.display = "block";
		document.getElementById("additionalCredit").title = "Click to minimize";
		document.getElementById("additionalCreditImage").src = "minus.png";
	}
	else{

		document.getElementById("additionalCreditSection").style.display = "none";
		document.getElementById("additionalCredit").title = "Click to expand";
		document.getElementById("additionalCreditImage").src = "add.png";
	}
}

document.getElementById("additionalCredit").onclick = function(){

	additionalCreditDisplay();
}
