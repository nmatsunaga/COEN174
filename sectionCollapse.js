function majorSelectionDisplay(){

	if(document.getElementById("majorSelectionSection").style.display == "none"){

		document.getElementById("majorSelectionSection").style.display = "block";
		//document.getElementById("majorSelectionText").innerHTML = "Major Selection";
		document.getElementById("majorSelection").title = "Click to minimize";
	}
	else{

		document.getElementById("majorSelectionSection").style.display = "none";
		//document.getElementById("majorSelectionText").innerHTML = "Major Selection (Click to Expand)";
		document.getElementById("majorSelection").title = "Click to expand";
	}
}

document.getElementById("majorSelection").onclick = function(){

	majorSelectionDisplay();
}

function engineeringOneDisplay(){

	if(document.getElementById("engineeringOneSection").style.display == "none"){

		document.getElementById("engineeringOneSection").style.display = "block";
		document.getElementById("engineeringOne").title = "Click to minimize";
	}
	else{

		document.getElementById("engineeringOneSection").style.display = "none";
		document.getElementById("engineeringOne").title = "Click to expand";
	}
}

document.getElementById("engineeringOne").onclick = function(){

	engineeringOneDisplay();
}

function studentDesignationDisplay(){

	if(document.getElementById("studentDesignationSection").style.display == "none"){

		document.getElementById("studentDesignationSection").style.display = "block";
		document.getElementById("studentDesignation").title = "Click to minimize";
	}
	else{

		document.getElementById("studentDesignationSection").style.display = "none";
		document.getElementById("studentDesignation").title = "Click to expand";
	}
}

document.getElementById("studentDesignation").onclick = function(){

	studentDesignationDisplay();
}

function computingCompetencyDisplay(){

	if(document.getElementById("computingCompetencySection").style.display == "none"){

		document.getElementById("computingCompetencySection").style.display = "block";
		document.getElementById("computingCompetency").title = "Click to minimize";
	}
	else{

		document.getElementById("computingCompetencySection").style.display = "none";
		document.getElementById("computingCompetency").title = "Click to expand";
	}
}

document.getElementById("computingCompetency").onclick = function(){

	computingCompetencyDisplay();
}

function calculusReadinessDisplay(){

	if(document.getElementById("calculusReadinessSection").style.display == "none"){

		document.getElementById("calculusReadinessSection").style.display = "block";
		document.getElementById("calculusReadiness").title = "Click to minimize";
	}
	else{

		document.getElementById("calculusReadinessSection").style.display = "none";
		document.getElementById("calculusReadiness").title = "Click to expand";
	}
}

document.getElementById("calculusReadiness").onclick = function(){

	calculusReadinessDisplay();
}

function APscoresDisplay(){

	if(document.getElementById("APscoresSection").style.display == "none"){

		document.getElementById("APscoresSection").style.display = "block";
		document.getElementById("APscores").title = "Click to minimize";
	}
	else{

		document.getElementById("APscoresSection").style.display = "none";
		document.getElementById("APscores").title = "Click to expand";
	}
}

document.getElementById("APscores").onclick = function(){

	APscoresDisplay();
}

function additionalCreditDisplay(){

	if(document.getElementById("additionalCreditSection").style.display == "none"){

		document.getElementById("additionalCreditSection").style.display = "block";
		document.getElementById("additionalCredit").title = "Click to minimize";
	}
	else{

		document.getElementById("additionalCreditSection").style.display = "none";
		document.getElementById("additionalCredit").title = "Click to expand";
	}
}

document.getElementById("additionalCredit").onclick = function(){

	additionalCreditDisplay();
}
