function printSchedule(){

	var tableOne = document.getElementById("Schedule");
	var tableTwo = document.getElementById("courseSummary");

	var newWin = window.open("");

	var major = document.getElementById("majorCoen");

	newWin.document.write("<img src=\"DarrenAtkinson.jpg\"></img> \"Here's your schedule!\"");

	if(major.checked){

		newWin.document.write("<h2 align=\"center\">Computer Science & Engineering Freshman Schedule</h2>");
	}
	else{

		newWin.document.write("<h1>Web Design & Engineering Freshman Schedule</h2>");
	}

	newWin.document.write(tableOne.outerHTML);
	newWin.document.write("<br><br>");
	newWin.document.write(tableTwo.outerHTML);
	newWin.document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">");
	newWin.document.close();
	newWin.focus();
	newWin.print();
	newWin.close();
}
