document.getElementById("majorCoen").onclick = function(){

	generateSchedule();
}

document.getElementById("majorWeb").onclick = function(){

	generateSchedule();
}

document.getElementById("ENGR1").onclick = function(){

	generateSchedule();
}

document.getElementById("studentDesignationH").onclick = function(){

	generateSchedule();
}

document.getElementById("studentDesignationL").onclick = function(){

	generateSchedule();
}

document.getElementById("coen10competency").onclick = function(){

	coen10competencyCheck();

	generateSchedule();
}

document.getElementById("calcReadinessCheck").onclick = function(){

	generateSchedule();
}

document.getElementById("calcAB").onchange = function(){

	calcABCheck();

	generateSchedule();
}

document.getElementById("calcBC").onchange = function(){

	calcBCCheck();

	generateSchedule();
}

document.getElementById("chemistry").onchange = function(){

	chemistryCheck();

	generateSchedule();
}

document.getElementById("compSciA").onchange = function(){

	compSciACheck();

	generateSchedule();
}

document.getElementById("enviSci").onchange = function(){

	enviSciCheck();

	generateSchedule();
}

document.getElementById("physicsCMech").onchange = function(){

	physicsCMechCheck();

	generateSchedule();
}

document.getElementById("physicsCEM").onchange = function(){

	physicsCEMCheck();

	generateSchedule();
}

document.getElementById("MATH11").onchange = function(){

	math11check();

	generateSchedule();
}

document.getElementById("MATH12").onchange = function(){

	math12check();

	generateSchedule();
}

document.getElementById("MATH13").onchange = function(){

	math13check();

	generateSchedule();
}

document.getElementById("MATH14").onchange = function(){

	math14check();

	generateSchedule();
}

document.getElementById("AMTH106").onchange = function(){

	amth106check();

	generateSchedule();
}

document.getElementById("MATH53").onchange = function(){

	math53check();

	generateSchedule();
}

document.getElementById("MATH11").onchange = function(){

	math11check();

	generateSchedule();
}

document.getElementById("COEN10").onchange = function(){

	coen10check();

	generateSchedule();
}

document.getElementById("COEN11").onchange = function(){

	coen11check();

	generateSchedule();
}

document.getElementById("COEN12").onchange = function(){

	coen12check();

	generateSchedule();
}

document.getElementById("COEN19").onchange = function(){

	//coen19check();

	generateSchedule();
}

document.getElementById("COEN20").onchange = function(){

	coen20check();

	generateSchedule();
}

document.getElementById("ELEN50").onchange = function(){

	elen50check();

	generateSchedule();
}

document.getElementById("CHEM11").onchange = function(){

	//chem11check();

	generateSchedule();
}

document.getElementById("PHYS31").onchange = function(){

	//physics31check();

	generateSchedule();
}

document.getElementById("PHYS32").onchange = function(){

	//physics32check();

	generateSchedule();
}

document.getElementById("PHYS33").onchange = function(){

	phys33check();

	generateSchedule();
}

document.getElementById("print").onclick = function(){

	printSchedule();
}

/*document.body.onload = function(){

	var width = screen.width;

	width = (width / 2) - 300;

	document.getElementById("fixedHeader").style.marginLeft = width + "px";
}*/

document.body.onscroll = function(){

	var yPosition = 0;
	var el = document.getElementById("divCenter");

	//console.log(el.offsetTop);
	//console.log(el.scrollTop);
	//console.log(el.clientTop);

	while(el){

		//console.log(yPosition);

		yPosition += el.offsetTop - el.scrollTop + el.clientTop;
		el = el.offsetParent;
	}

	yPosition = -1 * yPosition;

	console.log(yPosition);

	if(yPosition > 0){

		document.getElementById("rightColumn").style.paddingTop = yPosition + "px";
	}
}
