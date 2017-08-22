function menu (){
   let seleccion =Number(prompt( "1. Make a sum\n\
    2. Perform a rest\n\
    3. Perform a multiplication\n\
    4.Make a division\n\
    0.Exit the program"));
  return seleccion ;
  }
	
function sum (){
  console.clear();
   let v1=Number(prompt("	Enter a variable "));
   let v2=Number(prompt( " Enter another variable "));
   console.log( "The result of adding	"+v1+"	y "+v2+" Is "+ parseInt(v1+v2));
   validate ();
}
function rest (){
 let v1=Number(prompt("	Enter a variable "));
  let v2=Number(prompt( " Enter another variable "));
  console.log( "The result of rest	"+v1+"	y "+v2+" Is "+(v1-v2));
  validate ();
}
function multiplication (){
  let v1=Number(prompt("	Enter a variable "));
  let v2=Number(prompt( " Enter another variable "));
  console.log( "The result of multiplication	"+v1+"	y "+v2+" Is "+(v1*v2));
  validate ();
}
function divition () {
 let v1=Number(prompt("	Enter a variable "));
  let v2=Number(prompt( " Enter another variable "));
  console.log( "The result of division	"+v1+"	y "+v2+" Is "+(v1/v2));
  validate ();
  }			 
function validate (){
  option = menu ();
  switch (option){
  case 1 :
    sum ();
    break ;
  case 2:
    rest ();
    break;
  case 3: 
    multiplication ();
    break;
  case 4:
    divition ();
    break
  case 0 : 
  alert ("Bye");
  break;
default :
  validate ();
  break;
      }
  }
  validate ();