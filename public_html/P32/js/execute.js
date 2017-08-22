 class menu {
   constructor (){
     do {
   this.seleccion =Number(prompt( "1. Make a sum\n\
    2. Perform a rest\n\
    3. Perform a multiplication\n\
    4.Make a division\n\
    0.Exit the program"));
     }while (this.seleccion > 4);
     return this.seleccion ;
    }
  }	
 class operation extends menu {
  constructor (){
   super ();
   this.menu;
   }
  
 sum (){
   if (this.seleccion === 1){
     console.clear();
   let v1=Number(prompt("	Enter a variable "));
   let v2=Number(prompt( " Enter another variable "));
   console.log( "The result of adding	"+v1+"	y "+v2+" Is "+ parseInt(v1+v2));
   
 }
}
 rest (){
 if (this.seleccion === 2){  
 let v1=Number(prompt("	Enter a variable "));
  let v2=Number(prompt( " Enter another variable "));
  console.log( "The result of rest	"+v1+"	y "+v2+" Is "+(v1-v2));
  }
 }
 multiplication (){
  if (this.seleccion === 3){
     let v1=Number(prompt("	Enter a variable "));
     let v2=Number(prompt( " Enter another variable "));
     console.log( "The result of multiplication	"+v1+"	y "+v2+" Is "+(v1*v2));
  }
 }
 divition () {
   if (this.seleccion === 4){
 let v1=Number(prompt("	Enter a variable "));
  let v2=Number(prompt( " Enter another variable "));
  console.log( "The result of division	"+v1+"	y "+v2+" Is "+(v1/v2));
  }
}
 exit (){
   if (this.seleccion === 0 ){
     alert("Bye");
   }
 }
}
 let shit = new operation ();
 
shit.sum();
shit.rest();
shit.multiplication();
shit.divition();
shit.exit();