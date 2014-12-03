function generateSchedule(){

	if(document.getElementById("majorCoen").checked){

		document.getElementById("submitError").innerHTML = "";
		document.getElementById("Schedule").style.display = "table";
		document.getElementById("print").style.display = "block";
		document.getElementById("misc").style.display = "table";
		document.getElementById("courseSummary").style.display = "table";
		document.getElementById("rightHeader").style.display = "block"
		document.getElementById("submitError").style.display = "none";
		generateScheduleCOEN();
	}
	else if(document.getElementById("majorWeb").checked){

		document.getElementById("submitError").innerHTML = "";
		document.getElementById("Schedule").style.display = "table";
		document.getElementById("print").style.display = "block";
		document.getElementById("misc").style.display = "table";
		document.getElementById("courseSummary").style.display = "table";
		document.getElementById("rightHeader").style.display = "block"
		document.getElementById("submitError").style.display = "none";
		generateScheduleWEB();
	}
}

function fillCourseCreditList(){

	var i = 0;
	var count = 1;

	var flag = 0;

	var courseCreditList = [
						"MATH 11-Calculus I",
						"MATH 12-Calculus II",
						"MATH 13-Calculus III",
						"MATH 14-Calculus IV",
						"AMTH 106-Differential Equations",
						"MATH 53-Linear Algebra",
						"COEN 10-Introduction to Programming",
						"COEN 11-Advanced Programming",
						"COEN 12-Data Structures",
						"COEN 19-Discrete Math",
						"COEN 20-Embedded Systems",
						"ELEN 50-Electric Circuits",
						"CHEM 11-Chemistry I",
						"PHYS 31-Physics I",
						"PHYS 32-Physics II",
						"PHYS 33-Physics III"
						];
	var courseCreditNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	if(!(document.getElementById("calcReadinessCheck").checked)){

		if(document.getElementById("MATH11").checked){

			courseCreditNumbers[0] = 1;
		}

		if(document.getElementById("MATH12").checked){

			courseCreditNumbers[1] = 1;
		}

		if(document.getElementById("MATH13").checked){

			courseCreditNumbers[2] = 1;
		}

		if(document.getElementById("MATH14").checked){

			courseCreditNumbers[3] = 1;
		}

		if(document.getElementById("AMTH106").checked){

			courseCreditNumbers[4] = 1;
		}

		if(document.getElementById("MATH53").checked){

			courseCreditNumbers[5] = 1;
		}
	}

	if(document.getElementById("COEN10").checked){

		courseCreditNumbers[6] = 1;
	}

	if(document.getElementById("COEN11").checked){

		courseCreditNumbers[7] = 1;
	}

	if(document.getElementById("COEN12").checked){

		courseCreditNumbers[8] = 1;
	}

	if(document.getElementById("COEN19").checked){

		courseCreditNumbers[9] = 1;
	}

	if(document.getElementById("COEN20").checked){

		courseCreditNumbers[10] = 1;
	}

	if(document.getElementById("ELEN50").checked){

		courseCreditNumbers[11] = 1;
	}

	if(document.getElementById("CHEM11").checked){

		courseCreditNumbers[12] = 1;
	}

	if(document.getElementById("PHYS31").checked){

		courseCreditNumbers[13] = 1;
	}

	if(document.getElementById("PHYS32").checked){

		courseCreditNumbers[14] = 1;
	}

	if(document.getElementById("PHYS33").checked){

		courseCreditNumbers[15] = 1;
	}

	for(i = 1; i < 17; i++){

		var cellNameClear = "creditClass" + i;

		document.getElementById(cellNameClear).innerHTML = "";
	}

	for(i = 0; i < 16; i++){

		var cellName = "creditClass" + count;

		if(courseCreditNumbers[i] == 1){

			document.getElementById(cellName).innerHTML = courseCreditList[i];
			count++;

			flag = 1;
		}
	}

	if(flag){

		document.getElementById("creditRow0").style.display = "table-row";
		document.getElementById("creditRow1").style.display = "table-row";
		document.getElementById("creditRow2").style.display = "table-row";
		document.getElementById("creditRow3").style.display = "table-row";
		document.getElementById("creditRow4").style.display = "table-row";
	}
	else{

		document.getElementById("creditRow0").style.display = "none";
		document.getElementById("creditRow1").style.display = "none";
		document.getElementById("creditRow2").style.display = "none";
		document.getElementById("creditRow3").style.display = "none";
		document.getElementById("creditRow4").style.display = "none";
	}
}

function generateScheduleCOEN(){

	var i = 0;
	var count = 0;

	var colorList = ["#DCDCDC", "#ADD8E6", "#B5E5BC", "#FAFAD2"];

	var ENGR1quarter = "fall";

	var fallCore = -1;
	var winterCore = -1;
	var springCore = -1;

	var fallRigor = 0;
	var winterRigor = 0;
	var springRigor = 0;

	var allClasses = [];
	var allClassesRigor = [];

	allClasses.push("MATH 9-Precalculus"); allClassesRigor.push(0);
	allClasses.push("MATH 11-Calculus I"); allClassesRigor.push(0);
	allClasses.push("MATH 12-Calculus II"); allClassesRigor.push(0);
	allClasses.push("MATH 13-Calculus III"); allClassesRigor.push(0);
	allClasses.push("MATH 14-Calculus IV"); allClassesRigor.push(0);
	allClasses.push("AMTH 106-Differential Equations"); allClassesRigor.push(0);
	allClasses.push("AMTH 108-Probability and Statistics"); allClassesRigor.push(0);
	allClasses.push("MATH 53-Linear Algebra"); allClassesRigor.push(0);

	allClasses.push("COEN 10-Introduction to Programming (with Lab)"); allClassesRigor.push(1);
	allClasses.push("COEN 11-Advanced Programming (with Lab)"); allClassesRigor.push(1);
	allClasses.push("COEN 12-Data Structures (with Lab)"); allClassesRigor.push(1);
	allClasses.push("COEN 19-Discrete Math"); allClassesRigor.push(0);

	allClasses.push("CHEM 11-Chemistry I (with Lab)"); allClassesRigor.push(1);
	allClasses.push("CHEM 11(H)-Chemistry I Honors (with Lab)"); allClassesRigor.push(1);
	allClasses.push("PHYS 31-Physics I (with Lab)"); allClassesRigor.push(1);
	allClasses.push("PHYS 32-Physics II (with Lab)"); allClassesRigor.push(1);

	allClasses.push("CTW 1-Critical Thinking & Writing 1"); allClassesRigor.push(0);
	allClasses.push("CTW 2-Critical Thinking & Writing 2"); allClassesRigor.push(0);

	allClasses.push("C&I 1-Cultures & Ideas 1"); allClassesRigor.push(0);
	allClasses.push("C&I 2-Cultures & Ideas 2"); allClassesRigor.push(0);

	allClasses.push("Core Class"); allClassesRigor.push(0);

	var masterClassList = [];
	var masterClassColors = [];

	masterClassList.push("MATH 11-Calculus I");
	masterClassList.push("MATH 12-Calculus II");
	masterClassList.push("MATH 13-Calculus III");

	masterClassList.push("COEN 10-Introduction to Programming (with Lab)");
	masterClassList.push("COEN 11-Advanced Programming (with Lab)");
	masterClassList.push("COEN 12-Data Structures (with Lab)");

	masterClassList.push("CHEM 11-Chemistry I (with Lab)");
	masterClassList.push("PHYS 31-Physics I (with Lab)");
	masterClassList.push("PHYS 32-Physics II (with Lab)");

	masterClassList.push("CTW 1-Critical Thinking & Writing 1");
	masterClassList.push("CTW 2-Critical Thinking & Writing 2");
	masterClassList.push("COEN 19-Discrete Math");

	masterClassList.push("ENGR 1-Introduction to Engineering (with Lab)");
	masterClassList.push("");
	masterClassList.push("");

	masterClassList.push("");
	masterClassList.push("");
	masterClassList.push("");
	

	masterClassColors.push(colorList[1]);
	masterClassColors.push(colorList[1]);
	masterClassColors.push(colorList[1]);

	masterClassColors.push(colorList[2]);
	masterClassColors.push(colorList[2]);
	masterClassColors.push(colorList[2]);

	masterClassColors.push(colorList[1]);
	masterClassColors.push(colorList[1]);
	masterClassColors.push(colorList[1]);

	masterClassColors.push(colorList[3]);
	masterClassColors.push(colorList[3]);
	masterClassColors.push(colorList[1]);

	masterClassColors.push(colorList[2]);
	masterClassColors.push(colorList[0]);
	masterClassColors.push(colorList[0]);

	masterClassColors.push(colorList[0]);
	masterClassColors.push(colorList[0]);
	masterClassColors.push(colorList[0]);


	var coenClasses = ["COEN 10-Introduction to Programming (with Lab)", "COEN 11-Advanced Programming (with Lab)", "COEN 12-Data Structures (with Lab)", "COEN 19-Discrete Math"];
	var coenNumbers = [0, 0, 0, 0];
	var coenList = [];

	var mathClasses = ["MATH 9-Precalculus", "MATH 11-Calculus I", "MATH 12-Calculus II", "MATH 13-Calculus III", "MATH 14-Calculus IV", "AMTH 108-Probability and Statistics", "AMTH 106-Differential Equations", "MATH 53-Linear Algebra"];
	var mathNumbers = [0, 0, 0, 0, 0, 0, 0, 0];
	var mathList = [];

	if(document.getElementById("COEN10").checked){

		coenNumbers[0] = 1;
	}
	
	if(document.getElementById("COEN11").checked){

		coenNumbers[1] = 1;
	}

	if(document.getElementById("COEN12").checked){

		coenNumbers[2] = 1;
	}

	if(document.getElementById("COEN19").checked){

		coenNumbers[3] = 1;
	}

	while(count < 4){

		if(coenNumbers[count] == 0){

			coenList.push(coenClasses[count]);
		}
		else{

			coenList.push("Core Class");
		}

		count++;
	}

	count = 0;

	if(!(document.getElementById("calcReadinessCheck").checked)){

		mathNumbers[0] = 1;

		if(document.getElementById("MATH11").checked){

			mathNumbers[1] = 1;
		}

		if(document.getElementById("MATH12").checked){

			mathNumbers[2] = 1;
		}

		if(document.getElementById("MATH13").checked){

			mathNumbers[3] = 1;
		}

		if(document.getElementById("MATH14").checked){

			mathNumbers[4] = 1;
		}

		if(document.getElementById("AMTH106").checked){

			mathNumbers[6] = 1;
		}

		if(document.getElementById("MATH53").checked){

			mathNumbers[7] = 1;
		}
	}

	while(mathList.length < 3 && count < 8){

		if(mathNumbers[count] == 0){

			if(mathClasses[count] == "MATH 13-Calculus III" && document.getElementById("CHEM11").checked && document.getElementById("studentDesignationH").checked){

				mathList.push("MATH 13(H)-Calculus III Honors");
			}
			else{

				mathList.push(mathClasses[count]);
			}
		}

		count++;
	}

	count = 0;

	while(mathList.length < 3){

		mathList.push("Core Class");
	}

	masterClassList[0] = mathList[0];
	masterClassList[1] = mathList[1];
	masterClassList[2] = mathList[2];


	if(coenList[0] == "Core Class" && coenList[1] == "Core Class"){

		masterClassList[3] = coenList[0];
		masterClassList[4] = coenList[1];
		masterClassList[5] = coenList[2];
	}
	else if(coenList[0] == "Core Class"){

		masterClassList[3] = coenList[1];
		masterClassList[4] = coenList[2];
		masterClassList[5] = "Core Class";
	}
	else{

		masterClassList[3] = coenList[0];
		masterClassList[4] = coenList[1];
		masterClassList[5] = coenList[2];
	}

	masterClassList[11] = coenList[3];

	if(document.getElementById("CHEM11").checked){

		masterClassList[6] = "Core Class";
	}
	else{

		if(document.getElementById("studentDesignationH").checked){

			masterClassList[6] = "CHEM 11(H)-Chemistry I Honors (with Lab)";
		}
		else{

			masterClassList[6] = "CHEM 11-Chemistry I (with Lab)";
		}
	}

	if(document.getElementById("PHYS31").checked){

		masterClassList[7] = "Core Class";
	}
	else{

		masterClassList[7] = "PHYS 31-Physics I (with Lab)";
	}

	if(document.getElementById("PHYS32").checked){

		masterClassList[8] = "Core Class";
	}
	else{

		masterClassList[8] = "PHYS 32-Physics II (with Lab)";
	}

	for(var i = 0; i < 15; i++){

		if(masterClassList[(i * 3)] == "Core Class"){

			fallCore = (i * 3);
		}

		if(masterClassList[((i * 3) + 1)] == "Core Class"){

			winterCore = ((i * 3) + 1);
		}

		if(masterClassList[((i * 3) + 2)] == "Core Class"){

			springCore = ((i * 3) + 2);
		}
	}

	for(count = 0; count < 12; count++){

		if(masterClassList[count] == "Core Class"){

			masterClassColors[count] = colorList[3];
		}
	}

	if(!(fallCore == -1) && !(winterCore == -1)){

		masterClassList[fallCore] = "C&I 1-Cultures & Ideas 1";
		masterClassList[winterCore] = "C&I 2-Cultures & Ideas 2";

		masterClassColors[fallCore] = colorList[3];
		masterClassColors[winterCore] = colorList[3];
	}
	else if(!(winterCore == -1) && !(springCore == -1)){

		masterClassList[winterCore] = "C&I 1-Cultures & Ideas 1";
		masterClassList[springCore] = "C&I 2-Cultures & Ideas 2";

		masterClassColors[winterCore] = colorList[3];
		masterClassColors[springCore] = colorList[3];
	}

	if(document.getElementById("ENGR1").checked){

		if(document.getElementById("studentDesignationL").checked){

			masterClassList[12] = "LEAD 1-LEAD Seminar 1";
			masterClassList[13] = "LEAD 2-LEAD Seminar 2";
			masterClassList[14] = "";
			masterClassList[15] = "ENGR 1-Introduction to Engineering (with Lab)";

			masterClassColors[12] = colorList[3];
			masterClassColors[13] = colorList[3];
			masterClassColors[14] = colorList[0];
			masterClassColors[15] = colorList[2];
		}
	}
	else{

		for(count = 0; count < 4; count++){

			fallRigor += allClassesRigor[allClasses.indexOf(masterClassList[(3 * count)])];
			winterRigor += allClassesRigor[allClasses.indexOf(masterClassList[((3 * count) + 1)])];
			springRigor += allClassesRigor[allClasses.indexOf(masterClassList[((3 * count) + 2)])];
		}

		if(winterRigor < fallRigor){

			if(springRigor < winterRigor){

				ENGR1quarter = "spring";
			}
			else{

				ENGR1quarter = "winter";
			}	
		}
		else if(springRigor < fallRigor){

			ENGR1quarter = "spring";
		}
		else{

			ENGR1quarter = "fall";
		}

		if(ENGR1quarter == "fall"){

			if(document.getElementById("studentDesignationL").checked){

				masterClassList[12] = "LEAD 1-LEAD Seminar 1";
				masterClassList[13] = "LEAD 2-LEAD Seminar 2";
				masterClassList[14] = "";
				masterClassList[15] = "ENGR 1-Introduction to Engineering (with Lab)";
				masterClassList[16] = "";
				masterClassList[17] = "";

				masterClassColors[12] = colorList[3];
				masterClassColors[13] = colorList[3];
				masterClassColors[14] = colorList[0];
				masterClassColors[15] = colorList[2];
				masterClassColors[16] = colorList[0];
				masterClassColors[17] = colorList[0];
			}
			else{

				masterClassList[12] = "ENGR 1-Introduction to Engineering (with Lab)";
				masterClassList[13] = "";
				masterClassList[14] = "";

				masterClassColors[12] = colorList[2];
				masterClassColors[13] = colorList[0];
				masterClassColors[14] = colorList[0];
			}
		}
		else if(ENGR1quarter == "winter"){

			if(document.getElementById("studentDesignationL").checked){

				masterClassList[12] = "LEAD 1-LEAD Seminar 1";
				masterClassList[13] = "LEAD 2-LEAD Seminar 2";
				masterClassList[14] = "";
				masterClassList[15] = "";
				masterClassList[16] = "ENGR 1-Introduction to Engineering (with Lab)";
				masterClassList[17] = "";

				masterClassColors[12] = colorList[3];
				masterClassColors[13] = colorList[3];
				masterClassColors[14] = colorList[0];
				masterClassColors[15] = colorList[0];
				masterClassColors[16] = colorList[2];
				masterClassColors[17] = colorList[0];
			}
			else{

				masterClassList[12] = "";
				masterClassList[13] = "ENGR 1-Introduction to Engineering (with Lab)";
				masterClassList[14] = "";

				masterClassColors[12] = colorList[0];
				masterClassColors[13] = colorList[2];
				masterClassColors[14] = colorList[0];
			}
		}
		else{

			if(document.getElementById("studentDesignationL").checked){

				masterClassList[12] = "LEAD 1-LEAD Seminar 1";
				masterClassList[13] = "LEAD 2-LEAD Seminar 2";
				masterClassList[14] = "";
				masterClassList[15] = "";
				masterClassList[16] = "";
				masterClassList[17] = "ENGR 1-Introduction to Engineering (with Lab)";

				masterClassColors[12] = colorList[3];
				masterClassColors[13] = colorList[3];
				masterClassColors[14] = colorList[0];
				masterClassColors[15] = colorList[0];
				masterClassColors[16] = colorList[0];
				masterClassColors[17] = colorList[2];
			}
			else{

				masterClassList[12] = "";
				masterClassList[13] = "";
				masterClassList[14] = "ENGR 1-Introduction to Engineering (with Lab)";

				masterClassColors[12] = colorList[0];
				masterClassColors[13] = colorList[0];
				masterClassColors[14] = colorList[2];
			}
		}
	}

	if(document.getElementById("studentDesignationL").checked){

		document.getElementById("finalRow").style.display = "table-row";
	}
	else{

		document.getElementById("finalRow").style.display = "none";
	}

	fillCourseCreditList();

	document.getElementById("class1Fall").innerHTML = masterClassList[0];
	document.getElementById("class1Winter").innerHTML = masterClassList[1];
	document.getElementById("class1Spring").innerHTML = masterClassList[2];

	document.getElementById("class2Fall").innerHTML = masterClassList[3];
	document.getElementById("class2Winter").innerHTML = masterClassList[4];
	document.getElementById("class2Spring").innerHTML = masterClassList[5];

	document.getElementById("class3Fall").innerHTML = masterClassList[6];
	document.getElementById("class3Winter").innerHTML = masterClassList[7];
	document.getElementById("class3Spring").innerHTML = masterClassList[8];

	document.getElementById("class4Fall").innerHTML = masterClassList[9];
	document.getElementById("class4Winter").innerHTML = masterClassList[10];
	document.getElementById("class4Spring").innerHTML = masterClassList[11];

	document.getElementById("class5Fall").innerHTML = masterClassList[12];
	document.getElementById("class5Winter").innerHTML = masterClassList[13];
	document.getElementById("class5Spring").innerHTML = masterClassList[14];

	document.getElementById("class6Fall").innerHTML = masterClassList[15];
	document.getElementById("class6Winter").innerHTML = masterClassList[16];
	document.getElementById("class6Spring").innerHTML = masterClassList[17];


	document.getElementById("cell1.1").style.backgroundColor = masterClassColors[0];
	document.getElementById("cell1.2").style.backgroundColor = masterClassColors[1];
	document.getElementById("cell1.3").style.backgroundColor = masterClassColors[2];

	document.getElementById("cell2.1").style.backgroundColor = masterClassColors[3];
	document.getElementById("cell2.2").style.backgroundColor = masterClassColors[4];
	document.getElementById("cell2.3").style.backgroundColor = masterClassColors[5];

	document.getElementById("cell3.1").style.backgroundColor = masterClassColors[6];
	document.getElementById("cell3.2").style.backgroundColor = masterClassColors[7];
	document.getElementById("cell3.3").style.backgroundColor = masterClassColors[8];

	document.getElementById("cell4.1").style.backgroundColor = masterClassColors[9];
	document.getElementById("cell4.2").style.backgroundColor = masterClassColors[10];
	document.getElementById("cell4.3").style.backgroundColor = masterClassColors[11];

	document.getElementById("cell5.1").style.backgroundColor = masterClassColors[12];
	document.getElementById("cell5.2").style.backgroundColor = masterClassColors[13];
	document.getElementById("cell5.3").style.backgroundColor = masterClassColors[14];

	document.getElementById("cell6.1").style.backgroundColor = masterClassColors[15];
	document.getElementById("cell6.2").style.backgroundColor = masterClassColors[16];
	document.getElementById("cell6.3").style.backgroundColor = masterClassColors[17];
}

function generateScheduleWEB(){

	var count = 0;

	var colorList = ["#DCDCDC", "#ADD8E6", "#B5E5BC", "#FAFAD2"];

	var ENGR1quarter = "fall";

	var fallCore = -1;
	var winterCore = -1;
	var springCore = -1;

	var fallRigor = 0;
	var winterRigor = 0;
	var springRigor = 0;

	var allClasses = [];
	var allClassesRigor = [];

	allClasses.push("MATH 9-Precalculus"); allClassesRigor.push(0);
	allClasses.push("MATH 11-Calculus I"); allClassesRigor.push(0);
	allClasses.push("MATH 12-Calculus II"); allClassesRigor.push(0);
	allClasses.push("MATH 13-Calculus III"); allClassesRigor.push(0);
	allClasses.push("MATH 14-Calculus IV"); allClassesRigor.push(0);
	allClasses.push("AMTH 108-Probability and Statistics"); allClassesRigor.push(0);

	allClasses.push("COEN 10-Introduction to Programming (with Lab)"); allClassesRigor.push(1);
	allClasses.push("COEN 11-Advanced Programming (with Lab)"); allClassesRigor.push(1);
	allClasses.push("COEN 12-Data Structures (with Lab)"); allClassesRigor.push(1);

	allClasses.push("Natural Science (with Lab)"); allClassesRigor.push(1);

	allClasses.push("CTW 1-Critical Thinking & Writing 1"); allClassesRigor.push(0);
	allClasses.push("CTW 2-Critical Thinking & Writing 2"); allClassesRigor.push(0);

	allClasses.push("C&I 1-Cultures & Ideas 1"); allClassesRigor.push(0);
	allClasses.push("C&I 2-Cultures & Ideas 2"); allClassesRigor.push(0);

	allClasses.push("RTC 1-Religion, Theology & Culture"); allClassesRigor.push(0);

	allClasses.push("Core Class"); allClassesRigor.push(0);

	var masterClassList = [];
	var masterClassColors = [];

	masterClassList.push("MATH 11-Calculus I");
	masterClassList.push("MATH 12-Calculus II");
	masterClassList.push("MATH 13-Calculus III");

	masterClassList.push("Natural Science (with Lab)");
	masterClassList.push("C&I 1-Cultures & Ideas 1");
	masterClassList.push("C&I 2-Cultures & Ideas 2");

	masterClassList.push("CTW 1-Critical Thinking & Writing 1");
	masterClassList.push("CTW 2-Critical Thinking & Writing 2");
	masterClassList.push("RTC 1-Religion, Theology & Culture");

	masterClassList.push("COEN 10-Introduction to Programming (with Lab)");
	masterClassList.push("COEN 11-Advanced Programming (with Lab)");
	masterClassList.push("COEN 12-Data Structures (with Lab)");

	masterClassList.push("ENGR 1-Introduction to Engineering (with Lab)");
	masterClassList.push("");
	masterClassList.push("");

	masterClassList.push("");
	masterClassList.push("");
	masterClassList.push("");
	

	masterClassColors.push(colorList[1]);
	masterClassColors.push(colorList[1]);
	masterClassColors.push(colorList[1]);

	masterClassColors.push(colorList[1]);
	masterClassColors.push(colorList[3]);
	masterClassColors.push(colorList[3]);

	masterClassColors.push(colorList[3]);
	masterClassColors.push(colorList[3]);
	masterClassColors.push(colorList[3]);

	masterClassColors.push(colorList[2]);
	masterClassColors.push(colorList[2]);
	masterClassColors.push(colorList[2]);

	masterClassColors.push(colorList[2]);
	masterClassColors.push(colorList[0]);
	masterClassColors.push(colorList[0]);

	masterClassColors.push(colorList[0]);
	masterClassColors.push(colorList[0]);
	masterClassColors.push(colorList[0]);

	var coenClasses = ["COEN 10-Introduction to Programming (with Lab)", "COEN 11-Advanced Programming (with Lab)", "COEN 12-Data Structures (with Lab)"];
	var coenNumbers = [0, 0, 0];
	var coenList = [];

	var mathClasses = ["MATH 9-Precalculus", "MATH 11-Calculus I", "MATH 12-Calculus II", "MATH 13-Calculus III", "MATH 14-Calculus IV", "AMTH 108-Probability and Statistics"];
	var mathNumbers = [0, 0, 0, 0, 0, 0];
	var mathList = [];

	if(document.getElementById("COEN10").checked){

		coenNumbers[0] = 1;
	}
	
	if(document.getElementById("COEN11").checked){

		coenNumbers[1] = 1;
	}

	if(document.getElementById("COEN12").checked){

		coenNumbers[2] = 1;
	}

	while(count < 3){

		if(coenNumbers[count] == 0){

			coenList.push(coenClasses[count]);
		}
		else{

			coenList.push("Core Class");
		}

		count++;
	}

	count = 0;

	if(!(document.getElementById("calcReadinessCheck").checked)){

		mathNumbers[0] = 1;

		if(document.getElementById("MATH11").checked){

			mathNumbers[1] = 1;
		}

		if(document.getElementById("MATH12").checked){

			mathNumbers[2] = 1;
		}

		if(document.getElementById("MATH13").checked){

			mathNumbers[3] = 1;
		}

		if(document.getElementById("MATH14").checked){

			mathNumbers[4] = 1;
		}
	}

	while(mathList.length < 3 && count < 6){

		if(mathNumbers[count] == 0){

			if(mathClasses[count] == "MATH 13-Calculus III" && document.getElementById("studentDesignationH").checked){

				mathList.push("MATH 13(H)-Calculus III Honors");
			}
			else{

				mathList.push(mathClasses[count]);
			}
		}

		count++;
	}

	count = 0;

	while(mathList.length < 3){

		mathList.push("Core Class");
	}

	masterClassList[0] = mathList[0];
	masterClassList[1] = mathList[1];
	masterClassList[2] = mathList[2];

	if(document.getElementById("CHEM11").checked || document.getElementById("PHYS31").checked || document.getElementById("PHYS32").checked || document.getElementById("PHYS33").checked){

		masterClassList[3] = "Core Class";
	}

	if(coenList[0] == "Core Class" && coenList[1] == "Core Class"){

		masterClassList[9] = coenList[0];
		masterClassList[10] = coenList[1];
		masterClassList[11] = coenList[2];
	}
	else if(coenList[0] == "Core Class"){

		masterClassList[9] = coenList[1];
		masterClassList[10] = coenList[2];
		masterClassList[11] = "Core Class";
	}
	else{

		masterClassList[9] = coenList[0];
		masterClassList[10] = coenList[1];
		masterClassList[11] = coenList[2];
	}

	for(var i = 0; i < 15; i++){

		if(masterClassList[(i * 3)] == "Core Class"){

			fallCore = (i * 3);
		}

		if(masterClassList[((i * 3) + 1)] == "Core Class"){

			winterCore = ((i * 3) + 1);
		}

		if(masterClassList[((i * 3) + 2)] == "Core Class"){

			springCore = ((i * 3) + 2);
		}
	}

	for(count = 0; count < 12; count++){

		if(masterClassList[count] == "Core Class"){

			masterClassColors[count] = colorList[3];
		}
	}

	if(document.getElementById("ENGR1").checked){

		if(document.getElementById("studentDesignationL").checked){

			masterClassList[12] = "LEAD 1-LEAD Seminar 1";
			masterClassList[13] = "LEAD 2-LEAD Seminar 2";
			masterClassList[14] = "";
			masterClassList[15] = "ENGR 1-Introduction to Engineering (with Lab)";

			masterClassColors[12] = colorList[3];
			masterClassColors[13] = colorList[3];
			masterClassColors[14] = colorList[0];
			masterClassColors[15] = colorList[2];
		}
	}
	else{

		for(count = 0; count < 4; count++){

			fallRigor += allClassesRigor[allClasses.indexOf(masterClassList[(3 * count)])];
			winterRigor += allClassesRigor[allClasses.indexOf(masterClassList[((3 * count) + 1)])];
			springRigor += allClassesRigor[allClasses.indexOf(masterClassList[((3 * count) + 2)])];
		}

		if(winterRigor < fallRigor){

			if(springRigor < winterRigor){

				ENGR1quarter = "spring";
			}
			else{

				ENGR1quarter = "winter";
			}	
		}
		else if(springRigor < fallRigor){

			ENGR1quarter = "spring";
		}
		else{

			ENGR1quarter = "fall";
		}

		if(ENGR1quarter == "fall"){

			if(document.getElementById("studentDesignationL").checked){

				masterClassList[12] = "LEAD 1-LEAD Seminar 1";
				masterClassList[13] = "LEAD 2-LEAD Seminar 2";
				masterClassList[14] = "";
				masterClassList[15] = "ENGR 1-Introduction to Engineering (with Lab)";
				masterClassList[16] = "";
				masterClassList[17] = "";

				masterClassColors[12] = colorList[3];
				masterClassColors[13] = colorList[3];
				masterClassColors[14] = colorList[0];
				masterClassColors[15] = colorList[2];
				masterClassColors[16] = colorList[0];
				masterClassColors[17] = colorList[0];
			}
			else{

				masterClassList[12] = "ENGR 1-Introduction to Engineering (with Lab)";
				masterClassList[13] = "";
				masterClassList[14] = "";

				masterClassColors[12] = colorList[2];
				masterClassColors[13] = colorList[0];
				masterClassColors[14] = colorList[0];
			}
		}
		else if(ENGR1quarter == "winter"){

			if(document.getElementById("studentDesignationL").checked){

				masterClassList[12] = "LEAD 1-LEAD Seminar 1";
				masterClassList[13] = "LEAD 2-LEAD Seminar 2";
				masterClassList[14] = "";
				masterClassList[15] = "";
				masterClassList[16] = "ENGR 1-Introduction to Engineering (with Lab)";
				masterClassList[17] = "";

				masterClassColors[12] = colorList[3];
				masterClassColors[13] = colorList[3];
				masterClassColors[14] = colorList[0];
				masterClassColors[15] = colorList[0];
				masterClassColors[16] = colorList[2];
				masterClassColors[17] = colorList[0];
			}
			else{

				masterClassList[12] = "";
				masterClassList[13] = "ENGR 1-Introduction to Engineering (with Lab)";
				masterClassList[14] = "";

				masterClassColors[12] = colorList[0];
				masterClassColors[13] = colorList[2];
				masterClassColors[14] = colorList[0];
			}
		}
		else{

			if(document.getElementById("studentDesignationL").checked){

				masterClassList[12] = "LEAD 1-LEAD Seminar 1";
				masterClassList[13] = "LEAD 2-LEAD Seminar 2";
				masterClassList[14] = "";
				masterClassList[15] = "";
				masterClassList[16] = "";
				masterClassList[17] = "ENGR 1-Introduction to Engineering (with Lab)";

				masterClassColors[12] = colorList[3];
				masterClassColors[13] = colorList[3];
				masterClassColors[14] = colorList[0];
				masterClassColors[15] = colorList[0];
				masterClassColors[16] = colorList[0];
				masterClassColors[17] = colorList[2];
			}
			else{

				masterClassList[12] = "";
				masterClassList[13] = "";
				masterClassList[14] = "ENGR 1-Introduction to Engineering (with Lab)";

				masterClassColors[12] = colorList[0];
				masterClassColors[13] = colorList[0];
				masterClassColors[14] = colorList[2];
			}
		}
	}

	if(document.getElementById("studentDesignationL").checked){

		document.getElementById("finalRow").style.display = "table-row";
	}
	else{

		document.getElementById("finalRow").style.display = "none";
	}

	fillCourseCreditList();

	document.getElementById("class1Fall").innerHTML = masterClassList[0];
	document.getElementById("class1Winter").innerHTML = masterClassList[1];
	document.getElementById("class1Spring").innerHTML = masterClassList[2];

	document.getElementById("class2Fall").innerHTML = masterClassList[3];
	document.getElementById("class2Winter").innerHTML = masterClassList[4];
	document.getElementById("class2Spring").innerHTML = masterClassList[5];

	document.getElementById("class3Fall").innerHTML = masterClassList[6];
	document.getElementById("class3Winter").innerHTML = masterClassList[7];
	document.getElementById("class3Spring").innerHTML = masterClassList[8];

	document.getElementById("class4Fall").innerHTML = masterClassList[9];
	document.getElementById("class4Winter").innerHTML = masterClassList[10];
	document.getElementById("class4Spring").innerHTML = masterClassList[11];

	document.getElementById("class5Fall").innerHTML = masterClassList[12];
	document.getElementById("class5Winter").innerHTML = masterClassList[13];
	document.getElementById("class5Spring").innerHTML = masterClassList[14];

	document.getElementById("class6Fall").innerHTML = masterClassList[15];
	document.getElementById("class6Winter").innerHTML = masterClassList[16];
	document.getElementById("class6Spring").innerHTML = masterClassList[17];


	document.getElementById("cell1.1").style.backgroundColor = masterClassColors[0];
	document.getElementById("cell1.2").style.backgroundColor = masterClassColors[1];
	document.getElementById("cell1.3").style.backgroundColor = masterClassColors[2];

	document.getElementById("cell2.1").style.backgroundColor = masterClassColors[3];
	document.getElementById("cell2.2").style.backgroundColor = masterClassColors[4];
	document.getElementById("cell2.3").style.backgroundColor = masterClassColors[5];

	document.getElementById("cell3.1").style.backgroundColor = masterClassColors[6];
	document.getElementById("cell3.2").style.backgroundColor = masterClassColors[7];
	document.getElementById("cell3.3").style.backgroundColor = masterClassColors[8];

	document.getElementById("cell4.1").style.backgroundColor = masterClassColors[9];
	document.getElementById("cell4.2").style.backgroundColor = masterClassColors[10];
	document.getElementById("cell4.3").style.backgroundColor = masterClassColors[11];

	document.getElementById("cell5.1").style.backgroundColor = masterClassColors[12];
	document.getElementById("cell5.2").style.backgroundColor = masterClassColors[13];
	document.getElementById("cell5.3").style.backgroundColor = masterClassColors[14];

	document.getElementById("cell6.1").style.backgroundColor = masterClassColors[15];
	document.getElementById("cell6.2").style.backgroundColor = masterClassColors[16];
	document.getElementById("cell6.3").style.backgroundColor = masterClassColors[17];
}
