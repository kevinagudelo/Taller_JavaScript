//var selection;
var registro ={
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
function personalref () {
  console.clear();
  alert("Personal information");
  registro.name=prompt( "Write Full name ");
  registro.birthdate=prompt( "Write Birthdate  D/M/Y ");
  registro.phone=prompt( "Phone");
  registro.city=prompt( "City of residence ");
  return registro ;
          }
			function familyref (){
				console.clear();
                alert(" Section Of Family References");
				registro.namef=prompt("Write Full name ");
				registro.relationship=prompt( "Write Relationship ");
               registro.phonef=prompt("Write Phone ");
               return registro;
             }
			
function workref () { 
  console.clear();
  alert( " Section Of Work References ");
  registro.nemew=prompt( "Write Full name ");
  registro.company= prompt( "Write Name of Company ");
  registro.work=prompt( "Write Work you did ");
  registro.phonew=prompt("Write Phone ");
  return registro;
  }
function ocupational () { 
  alert(" Section Occupational profile ");
  registro.ocupation=prompt(" Type your occupational profile briefly (maximum 600 characters)");
  return registro;
  }
function print () { 
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
  console.log("Name   :  "+ registro.nemew);
  console.log("Name of company   :  "+registro.company);
  console.log("Work you did  :   "+registro.work);
  console.log("Phone :   " + registro.phonew);
 console.log(" -------------------------------------------------Occupational profile -------------------------------------------------");
  console.log("Professional Profile  :  " +registro.ocupation);
 }
			

function validate (){
  option = menu ();
  switch (option){
    case 1:
      personalref();
      validate ();
      break;
    case 2:
      familyref ();
      validate ();
      break;
    case 3 :
      workref ();
      validate ();
      break
    case 4:
      ocupational ();
      validate ();
      break;
    case 5 :
     print ();
     validate ();
     break;
     
    case 0: 
    alert ("bye");
    break;
  default:validate ();
    
  }
}
validate ();