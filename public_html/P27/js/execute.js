//var selection;
var registro ={
name : " ", 
namew: " ",
 birthdate: " ",
 phone:'0',
 phonew :'0',
city:" ",
namef:" ",
 relationship:" ",
phonef:" ",
company:"",
work:"",
ocupation:""
 };
function  menu (){
    var selection = Number(prompt( "1. Personal information \n\
    2. Family Reference\n\
    3. Work reference\n\
    4. Professional profile description\n\
    5. Print resume\n\
    0. Exit the program"));
    return selection; 
}



var	pit=657576656765;
	var option = menu();
    while (option > 0) {
    	console.clear();
		
    	
		if (option ===1) {
			console.clear();
	    	alert("Personal information");
			
			registro.name=prompt( "Write Full name ");
			registro.birthdate=prompt( "Write Birthdate  D/M/Y ");
			registro.phone=prompt( "Phone");
			registro.city=prompt( "City of residence ");
			retorn=Number(prompt( "Press any key to return to the menu"));
          }else if (retorn===!pit) {
        			console.clear();
                  } 
          option=menu();
			if (option===2) { 
				console.clear();
                alert(" Section Of Family References");
				registro.namef=prompt("Write Full name ");
				registro.relationship=prompt( "Write Relationship ");
			    registro.phonef=prompt("Write Phone ");
				retorn=prompt( "Press any key to return to the menu");
				
				}else if (retorn===!pit) {
        			console.clear();
                  } 
			 option=menu();
			if (option===3) { 
				console.clear();
				alert( " Section Of Work References ");
				registro.nemew=prompt( "Write Full name ");
				registro.company= prompt( "Write Name of Company ");
				registro.work=prompt( "Write Work you did ");
				registro.phonew=prompt("Write Phone ");
				retorn=prompt( "Press any key to return to the menu");
				
				} else if (retorn===!pit) {
        			console.clear();
                  } 
			 option=menu();
	 		if (option===4) { 
	 			alert(" Section Occupational profile ");
	 			registro.ocupation=prompt(" Type your occupational profile briefly (maximum 600 characters)");
	 			
				retorn=prompt( "Press any key to return to the menu");
				
				}else if (retorn===!pit) {
        			console.clear();
                  } 
			option=menu();
	 		if (option===5) { 
	 			console.clear();
	 			console.log( " -------------------------------------------------Curriculum vitae -------------------------------------------------");
	 			console.log( " -------------------------------------------------Personal Information  ------------------------------------------------ ");
	 			console.log("Name  : "+registro.name);
				console.log("Birthdate  : "+registro.birthdate);
	 			console.log("Phone :  " + registro.phone);
	 			console.log("City   :  "+ registro.city);
	 			console.log( " -------------------------------------------------Family Reference -------------------------------------------------");
	 			console.log(" Name  :  "+registro.namef);
	 			console.log(" Relationship   :  "+registro.relationship);
	 			console.log(" Phone   :    " + registro.phonef);
				console.log(" -------------------------------------------------Work Reference -------------------------------------------------");
				console.log("Name   :  "+registro.namew);
				console.log("Name of company   :  "+registro.company);
	 			console.log("Work you did  :   "+registro.work);
	 			console.log("Phone :   " + registro.phonew);
				console.log(" -------------------------------------------------Occupational profile -------------------------------------------------");
				console.log("Professional Profile  :  " +registro.ocupation);
				retorn=prompt( "Press any key to return to the menu");
			    } else if(retorn===!pit) {
        			console.clear();
                  } 
            }
			

