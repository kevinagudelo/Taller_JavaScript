class main {
  constructor (tam){
    this.tam= tam ;
    this.arreglo =[];
  }
capture (){ 

var p=0;
var z=0;
var sumap=0;
var sumaz=0;


	for ( var i=0 ; i < this.tam; i++) {
	this.arreglo[i] =   Number(prompt( "enter num "));
      
	if (this.arreglo[i] % 2 === 0 ){ 
	p=p+1;
	 sumap=(sumap+this.arreglo[i]);
  }else{
	 z=z+1;
	sumaz=sumaz+this.arreglo[i];
	
  }
	
    }
	console.log( " The pairs were	"+p);
	console.log (" The odd ones were	"+z);
	console.log(" The sum of the pairs is "+sumap);
	console.log(" The sum of the odd numbers is " +sumaz);
	console.log("The average of even numbers is" +(sumap/p));
        console.log(  " The average of the odd numbers is "+ (sumaz/z));
        console.log( " Even numbers are " );
		for (i=0 ; i < this.tam; i++ ){
	
			if (this.arreglo[i] % 2===0) { 
              console.log( this.arreglo[i]);
            } 
          }
	
		console.log(" Prime numbers are " );
		for ( i=0 ; i < this.tam; i++ ){
	
			if( this.arreglo[i] % 2=== 1){  
			console.log (this.arreglo[i]);
            }
         }

}
}

let tam = parseInt(prompt('What is the size of your arrangement?'));
let all =  new main (tam);
all.capture();