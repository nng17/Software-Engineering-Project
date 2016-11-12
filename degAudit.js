
var ids = ["advw","en1", "c10", "c11", "c12", "c19", "c20", "c21", "c70", "c122", "c146", "c171", "c174", "c175", "c177", "c179",
"el50", "el153", "c194", "en194", "c195", "en195", "c196", "en196", "e1", "e2", "e3", "m11", "m12", "m13", "m14", "m53",
"am106", "m22", "am108", "p31", "p32", "p33", "ch11", "ctw1", "ctw2", "ci1", "ci2", "ci3", "rtc1", "rtc2", "rtc3", "eth",
"div", "ss", "elsj", "ee1", "ee2", "ee3", "ee4", "ee5", "ee6", "ee7"];

var courses= [
	["ENGR 1", "en1"],
	["COEN 10", "c10"],
	["COEN 11", "c11"],
	["COEN 12", "c12"],
	["COEN 19", "c19"],
	["COEN 20", "c20"],
	["COEN 21", "c21"],
	["COEN 70", "c70"],
	["COEN 122", "c122"],
	["COEN 146", "c146"],
	["COEN 171", "c171"],
	["COEN 174", "c174"],
	["COEN 175", "c175"],
	["COEN 177", "c177"],
	["COEN 179", "c179"],
	["ELEN 50", "el50"],
	["ELEN 153", "el153"],
	["COEN 194", "c194"],
	["ENGR 194", "en194"],
	["COEN 195", "c195"],
	["ENGR 195", "en195"],
	["COEN 196", "c196"],
	["ENGR 196", "en196"],
	["COEN 145", "e"],
	["COEN 148", "e"],
	["COEN 150", "e"],
	["COEN 160", "e"],
	["COEN 161", "e"],
	["COEN 162", "e"],
	["COEN 163", "e"],
	["COEN 164", "e"],
	["COEN 180", "e"],
	["MATH 11", "m11"],
	["MATH 12", "m12"],
	["MATH 13", "m13"],
	["MATH 14", "m14"],
	["MATH 53", "m53"],
	["AMTH 106", "am106"],
	["MATH 22", "m22"],
	["AMTH 108", "am108"],
	["PHYS 31", "p31"],
	["PHYS 32", "p32"],
	["PHYS 33", "p33"],
	["CHEM 11", "ch11"],
	["ENGL 1A", "ctw1"],
	["ENGL 1H", "ctw1"],
	["ENGL 2A", "ctw2"],
	["ENGL 2H", "ctw2"],
	["ANTH 11A", "ci1"],
	["ENGL 11A", "ci1"],
	["ENGL 11B", "ci1"],
	["HIST 11A", "ci1"],
	["ANTH 12A", "ci2"],
	["ENGL 12A", "ci2"],
	["ENGL 12B", "ci2"],
	["HIST 12A", "ci2"],
	["HIST 124A", "ci3"],
	["PHIL 128A", "ci3"],
	["RSOC 7", "rtc1"],
	["RSOC 9", "rtc1"],
	["TESP 2", "rtc1"],
	["TESP 4", "rtc1"],
	["TESP 41", "rtc2"],
	["RSOC 51", "rtc2"],
	["SCTR 175R", "rtc3"],
	["TESP 164", "rtc3"],
	["TESP 184", "rtc3"],
	["ENGR 19", "eth"],
	["TESP 157", "eth"],
	["PHIL 2", "eth"],
	["PHIL 6", "eth"],
	["SOCI 33", "div"],
	["ETHN 30", "div"],
	["ETHN 144", "div"],
	["POLI 153", "div"],
	["ECON 1", "ss"],
	["PSYC 1", "ss"],
	["SOCI 1", "ss"],
	["ANTH 2", "ss"],
	["ANTH 3", "elsj"],
	["LEAD 17", "elsj"],
	["SOCI 30", "elsj"],
	["ARTS 151", "elsj"],
	["ENGL 181", "advw"],
	["ENGL 16", "advw"],
	["ENGL 115H", "advw"],
	["PHYS 151", "advw"],
]




function restore() {
	if(typeof(Storage) !== "undefined") {
		var i;

		for(i = 0; i < ids.length; i++) {
			if(localStorage.getItem(ids[i]) != null){
				updateDocument2(ids[i], localStorage.getItem(ids[i]));
			}
		}

	}
}


function check_box(checkbox, li){
	if (document.getElementById(checkbox).checked) {
		document.getElementById(li).style.background="#99ff66";
		// add to the local storage
		var classname = document.getElementById(checkbox).value;
		addToStorage(checkbox,classname);
	}
	else{
		document.getElementById(li).style.background="white";
		//remove from the local storage
		removeFromStorage(checkbox);

	}
}



function check_droplist(dropdown,li){

	if (document.getElementById(dropdown).value!='') {
		document.getElementById(li).style.background="#99ff66";
		// add to the local storage
		var classname=document.getElementById(dropdown).value;
		addToStorage(dropdown,classname);
	}
	else{
		document.getElementById(li).style.background="white";
		// remove to the local storage
		removeFromStorage(dropdown);
	}
}



function check_text(tex,li){
	if (document.getElementById(tex).value!='') {
		document.getElementById(li).style.background="#99ff66";
		// add to the local storage
		var classname=document.getElementById(tex).value;
		addToStorage(tex,classname);
	}
	if (document.getElementById(tex).value=='') {
		document.getElementById(li).style.background="white";
		// remove to the local storage
		removeFromStorage(tex);
	}
}



function updateDocument1(id, classname) {
	var domObject;

	if(id != null) {
		domObject = document.getElementById(id);
		switch(domObject.type) {

			case "checkbox":
				domObject.click();
				break;
			case "select-one":
				domObject.value=classname;
				domObject.onchange();
				break;
		}
	} else {

		domObject = document.getElementById("others");
		var data = domObject.getElementsByTagName("input");
		var counter;

		for(counter = 0; counter < data.length; counter++) {
			if(data[counter].value == ""){
				data[counter].value = classname;
				break;
			}
		}

		data[counter].onkeydown();
	}
}


function updateDocument2(id, classname) {
	var domObject;

	if(id != null) {
		domObject = document.getElementById(id);
		switch(domObject.type) {

			case "checkbox":
				domObject.click();
				break;
			case "select-one":
				domObject.value=classname;
				domObject.onchange();
				break;
			default:
				domObject = document.getElementById("others");
				var data = domObject.getElementsByTagName("input");
				var counter;

				for(counter = 0; counter < data.length; counter++) {
					if(data[counter].value == ""){
					data[counter].value = classname;
					break;
				}
				}

		data[counter].onkeydown();
	}
}
}



function addToStorage(id, classname) {
	if(typeof(Storage) !== "undefined") {

		localStorage.setItem(id, classname);
	}
}

function removeFromStorage(id) {
	if(typeof(Storage) !== "undefined") {
		localStorage.removeItem(id);
	}
}



function submit() {
	var i;
	var id = null;
	var classname = document.getElementById("search").value;

	for(i = 0; i < courses.length; i++) {
		if(classname == courses[i][0]) {
			id = courses[i][1];
			if(id == "e") {
			if(localStorage.e1 == undefined)
				id='e1';
			else if(localStorage.e2 == undefined)
				id='e2';
			else if(localStorage.e3 == undefined)
				id='e3';
		}
			break;
		}
	}

	id = updateDocument1(id, classname);
}
