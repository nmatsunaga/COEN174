function coen10competencyCheck(){

	var score = document.getElementById("compSciA").options[document.getElementById("compSciA").selectedIndex].value;

	if(document.getElementById("coen10competency").checked){

		document.getElementById("COEN10").checked = true;

		document.getElementById("COEN10").disabled = true;
	}
	else{

		if(score < 3){

			document.getElementById("COEN10").checked = false;

			document.getElementById("COEN10").disabled = false;

			coen10check();
		}
	}
}

function calcABCheck(){

	var scoreAB = document.getElementById("calcAB").options[document.getElementById("calcAB").selectedIndex].value;
	var scoreBC = document.getElementById("calcBC").options[document.getElementById("calcBC").selectedIndex].value;

	if(scoreAB >= 4){

		document.getElementById("MATH11").checked = true;

		document.getElementById("MATH11").disabled = true;
	}
	else{

		if(scoreBC <= 2){

			document.getElementById("MATH11").checked = false;

			document.getElementById("MATH11").disabled = false;

			math11check();
		}
	}
}

function calcBCCheck(){

	var scoreAB = document.getElementById("calcAB").options[document.getElementById("calcAB").selectedIndex].value;
	var scoreBC = document.getElementById("calcBC").options[document.getElementById("calcBC").selectedIndex].value;

	if(scoreBC >= 4){

		document.getElementById("MATH11").checked = true;
		document.getElementById("MATH12").checked = true;

		document.getElementById("MATH11").disabled = true;
		document.getElementById("MATH12").disabled = true;
	}
	else if(scoreBC == 3){

		document.getElementById("MATH11").checked = true;
		document.getElementById("MATH12").checked = false;

		document.getElementById("MATH11").disabled = true;
		document.getElementById("MATH12").disabled = false;

		math12check();
	}
	else{

		document.getElementById("MATH12").checked = false;
		document.getElementById("MATH12").disabled = false;

		math12check();

		if(scoreAB < 4){

			document.getElementById("MATH11").checked = false;
			document.getElementById("MATH11").disabled = false;

			math11check();
		}
	}
}

function compSciACheck(){

	var score = document.getElementById("compSciA").options[document.getElementById("compSciA").selectedIndex].value;

	if(score >= 4){

		document.getElementById("COEN10").checked = true;
		document.getElementById("COEN11").checked = true;

		document.getElementById("COEN10").disabled = true;
		document.getElementById("COEN11").disabled = true;
	}
	else if(score == 3){

		document.getElementById("COEN10").checked = true;
		document.getElementById("COEN11").checked = false;

		document.getElementById("COEN10").disabled = true;
		document.getElementById("COEN11").disabled = false;

		coen12check();
	}
	else{

		document.getElementById("COEN10").checked = false;
		document.getElementById("COEN11").checked = false;

		document.getElementById("COEN10").disabled = false;
		document.getElementById("COEN11").disabled = false;

		coen11check();
		coen12check();
	}
}

function chemistryCheck(){

	var scoreChemistry = document.getElementById("chemistry").options[document.getElementById("chemistry").selectedIndex].value;
	var scoreEnviSci = document.getElementById("enviSci").options[document.getElementById("enviSci").selectedIndex].value;

	if(scoreChemistry == 3){

		document.getElementById("CHEM11").checked = true;

		document.getElementById("CHEM11").disabled = true;

		if(scoreEnviSci >= 4){

			document.getElementById("AMTH106").checked = true;

			document.getElementById("AMTH106").disabled = true;
		}
		else{

			document.getElementById("AMTH106").checked = false;

			document.getElementById("AMTH106").disabled = false;
		}
	}
	else if(scoreChemistry >= 4){

		document.getElementById("CHEM11").checked = true;
		document.getElementById("AMTH106").checked = true;

		document.getElementById("CHEM11").disabled = true;
		document.getElementById("AMTH106").disabled = true;
	}
	else{

		document.getElementById("AMTH106").checked = false;

		document.getElementById("AMTH106").disabled = false;

		if(scoreEnviSci < 4){

			document.getElementById("CHEM11").checked = false;

			document.getElementById("CHEM11").disabled = false;
		}
	}
}

function enviSciCheck(){

	var scoreChemistry = document.getElementById("chemistry").options[document.getElementById("chemistry").selectedIndex].value;
	var scoreEnviSci = document.getElementById("enviSci").options[document.getElementById("enviSci").selectedIndex].value;

	if(scoreEnviSci >= 4){

		document.getElementById("CHEM11").checked = true;

		document.getElementById("CHEM11").disabled = true;

		if(scoreChemistry >= 3){

			document.getElementById("AMTH106").checked = true;

			document.getElementById("AMTH106").disabled = true;
		}
	}
	else{

		if(scoreChemistry == 3){

			document.getElementById("AMTH106").checked = false;

			document.getElementById("AMTH106").disabled = false;
		}
		else if(scoreChemistry < 3){

			document.getElementById("AMTH106").checked = false;
			document.getElementById("CHEM11").checked = false;

			document.getElementById("AMTH106").disabled = false;
			document.getElementById("CHEM11").disabled = false;
		}
	}
}

function physicsCMechCheck(){

	var score = document.getElementById("physicsCMech").options[document.getElementById("physicsCMech").selectedIndex].value;

	if(score >= 4){

		document.getElementById("PHYS31").checked = true;

		document.getElementById("PHYS31").disabled = true;
	}
	else{

		document.getElementById("PHYS31").checked = false;

		document.getElementById("PHYS31").disabled = false;
	}
}

function physicsCEMCheck(){

	var score = document.getElementById("physicsCEM").options[document.getElementById("physicsCEM").selectedIndex].value;

	if(score >= 4){

		document.getElementById("PHYS33").checked = true;

		document.getElementById("PHYS33").disabled = true;
	}
	else{

		document.getElementById("PHYS33").checked = false;

		document.getElementById("PHYS33").disabled = false;
	}
}

function math11check(){

	var scoreCalcAB = document.getElementById("calcAB").options[document.getElementById("calcAB").selectedIndex].value;
	var scoreCalcBC = document.getElementById("calcBC").options[document.getElementById("calcBC").selectedIndex].value;

	var scoreChemistry = document.getElementById("chemistry").options[document.getElementById("chemistry").selectedIndex].value;
	var scoreEnviSci = document.getElementById("enviSci").options[document.getElementById("enviSci").selectedIndex].value;

	if(scoreCalcAB >= 4 || scoreCalcBC >= 3){

		document.getElementById("MATH11").checked = true;
	}
	else if(document.getElementById("MATH11").checked == false){

		document.getElementById("MATH12").checked = false;
		document.getElementById("MATH13").checked = false;
		document.getElementById("MATH14").checked = false;
		document.getElementById("MATH53").checked = false;

		if(!(scoreChemistry >= 4 || (scoreChemistry == 3 && scoreEnviSci >= 4))){

			document.getElementById("AMTH106").checked = false;
		}
	}
}

function math12check(){

	var scoreCalcAB = document.getElementById("calcAB").options[document.getElementById("calcAB").selectedIndex].value;
	var scoreCalcBC = document.getElementById("calcBC").options[document.getElementById("calcBC").selectedIndex].value;

	var scoreChemistry = document.getElementById("chemistry").options[document.getElementById("chemistry").selectedIndex].value;
	var scoreEnviSci = document.getElementById("enviSci").options[document.getElementById("enviSci").selectedIndex].value;

	if(scoreCalcBC >= 4){

		document.getElementById("MATH12").checked = true;
	}
	else if(document.getElementById("MATH12").checked == true){

		document.getElementById("MATH11").checked = true;
	}
	else{

		document.getElementById("MATH13").checked = false;
		document.getElementById("MATH14").checked = false;
		document.getElementById("MATH53").checked = false;

		if(!(scoreChemistry >= 4 || (scoreChemistry == 3 && scoreEnviSci >= 4))){

			document.getElementById("AMTH106").checked = false;
		}
	}
}

function math13check(){

	var scoreChemistry = document.getElementById("chemistry").options[document.getElementById("chemistry").selectedIndex].value;
	var scoreEnviSci = document.getElementById("enviSci").options[document.getElementById("enviSci").selectedIndex].value;

	if(document.getElementById("MATH13").checked == true){

		document.getElementById("MATH11").checked = true;
		document.getElementById("MATH12").checked = true;
	}
	else{

		document.getElementById("MATH14").checked = false;
		document.getElementById("MATH53").checked = false;

		if(!(scoreChemistry >= 4 || (scoreChemistry == 3 && scoreEnviSci >= 4))){

			document.getElementById("AMTH106").checked = false;
		}
	}	
}

function math14check(){

	var scoreChemistry = document.getElementById("chemistry").options[document.getElementById("chemistry").selectedIndex].value;
	var scoreEnviSci = document.getElementById("enviSci").options[document.getElementById("enviSci").selectedIndex].value;

	if(document.getElementById("MATH14").checked == true){

		document.getElementById("MATH11").checked = true;
		document.getElementById("MATH12").checked = true;
		document.getElementById("MATH13").checked = true;
	}
	else{

		if(!(scoreChemistry >= 4 || (scoreChemistry == 3 && scoreEnviSci >= 4))){

			document.getElementById("AMTH106").checked = false;
		}
	}
}

function amth106check(){

	var scoreChemistry = document.getElementById("chemistry").options[document.getElementById("chemistry").selectedIndex].value;
	var scoreEnviSci = document.getElementById("enviSci").options[document.getElementById("enviSci").selectedIndex].value;

	if(scoreChemistry >= 4 || (scoreChemistry == 3 && scoreEnviSci >= 4)){

		document.getElementById("AMTH106").checked = true;
	}
	else if(document.getElementById("AMTH106").checked == true){

		document.getElementById("MATH11").checked = true;
		document.getElementById("MATH12").checked = true;
		document.getElementById("MATH13").checked = true;
		document.getElementById("MATH14").checked = true;
	}
}

function math53check(){

	if(document.getElementById("MATH53").checked == true){

		document.getElementById("MATH11").checked = true;
		document.getElementById("MATH12").checked = true;
		document.getElementById("MATH13").checked = true;
	}
}

function coen10check(){

	var scoreCompSciA = document.getElementById("compSciA").options[document.getElementById("compSciA").selectedIndex].value;

	if(scoreCompSciA >= 3 || document.getElementById("coen10competency").checked){

		document.getElementById("COEN10").checked = true;
	}
	else if(document.getElementById("COEN10").checked == false){

		document.getElementById("COEN11").checked = false;
		document.getElementById("COEN12").checked = false;
		document.getElementById("COEN20").checked = false;
	}
}

function coen11check(){

	var scoreCompSciA = document.getElementById("compSciA").options[document.getElementById("compSciA").selectedIndex].value;

	if(scoreCompSciA >= 4){

		document.getElementById("COEN11").checked = true;
	}
	else if(document.getElementById("COEN11").checked == true){

		document.getElementById("COEN10").checked = true;
	}
	else{

		document.getElementById("COEN12").checked = false;
		document.getElementById("COEN20").checked = false;
	}
}

function coen12check(){

	if(document.getElementById("COEN12").checked == false){

		document.getElementById("COEN20").checked = false;
	}
	else{

		document.getElementById("COEN10").checked = true;
		document.getElementById("COEN11").checked = true;
	}
}

function coen20check(){

	if(document.getElementById("COEN20").checked == true){

		document.getElementById("COEN10").checked = true;
		document.getElementById("COEN11").checked = true;
		document.getElementById("COEN12").checked = true;
	}
}

function elen50check(){

	var scoreCEM = document.getElementById("physicsCEM").options[document.getElementById("physicsCEM").selectedIndex].value;

	if(document.getElementById("ELEN50").checked == true){

		if(document.getElementById("PHYS33").checked == false && (scoreCEM < 4)){

			document.getElementById("ELEN50").checked = false;
		}
	}
}

function phys33check(){

	if(document.getElementById("PHYS33").checked == false){

		document.getElementById("ELEN50").checked = false;
	}
}
