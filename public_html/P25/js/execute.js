var  arreglo =[] ;  

var p=0;
var z=0;
var sumap=0;
var sumaz=0;


	for ( i=1 ; i<=10; i++) {
            
	arreglo[i] = prompt( "enter num ");
      
	if ( arreglo[i]/ i === Math.round(arreglo[i]/i) && i!==1 && i!== arreglo[i]){ 
	
         z=z+1;
	sumaz=sumaz+arreglo[i];
  }else{
	 p=p+1;
	 sumap=(sumap+arreglo[i]);
	
  }
	
    }
	console.log( " The pairs were	"+p);
	console.log (" The odd ones were	"+z);
	console.log(" The sum of the pairs is "+sumap);
	console.log(" The sum of the odd numbers is " +sumaz);
	console.log("The average of even numbers is" +(sumap/p));
    console.log(  " The average of the odd numbers is "+ (sumaz/z));
    console.log( " Even numbers are " );
		for (i=1 ; i<=10; i++ ){
	
			if (arreglo[i] % 2===0) { 
              console.log( arreglo[i]);
            } 
          }
	
		console.log(" Prime numbers are " );
		for ( i=1 ; i<=10; i++ ){
	
			if ( arreglo[i]/ i === Math.round(arreglo[i]/i) && i!==1 && i!== arreglo[i]){  
			console.log (arreglo[i]);
            }
         }

