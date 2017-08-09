var seleccion;
var v1;
var v2;
var pit;
var regresar;


pit=( 657576656765);
    
	while (seleccion !==0 ) {
    seleccion =Number(prompt( "1. Make a sum\n\
    2. Perform a rest\n\
    3. Perform a multiplication\n\
    4.Make a division\n\
    0.Exit the program"));

	

		if (seleccion ===1) {
			console.clear();
			v1=Number(prompt("	Enter a variable "));
            
			v2=Number(prompt( " Enter another variable "));
            
            console.log( "The result of adding	"+v1+"	y "+v2+" Is "+ parseInt(v1+v2));
			 
			regresar= prompt( " Press any key to continue ");
          
              if ((regresar) < (pit)) {
					
				console.clear();
              }        
    }
 	seleccion = Number(prompt( "1. Make a sum\n\
    2. Perform a rest\n\
    3. Perform a multiplication\n\
    4.Make a division\n\
	0. Exit the program"));
				if (seleccion===2) {
			
			v1=Number(prompt("	Enter a variable "));
            
			v2=Number(prompt( " Enter another variable "));
            console.log( "The result of rest	"+v1+"	y "+v2+" Is "+(v1-v2));
			 
			regresar= prompt( " Press any key to continue ");
			
				 if   (regresar < pit) {
					
				console.clear();
                }
          }
		
			seleccion = Number(prompt( "1. Make a sum\n\
    2. Perform a rest\n\
    3. Perform a multiplication\n\
    4.Make a division\n\
	0. Exit the program"));
				if (seleccion===3) {
			
			v1=Number(prompt("	Enter a variable "));
            
			v2=Number(prompt( " Enter another variable "));
            console.log( "The result of multiplication	"+v1+"	y "+v2+" Is "+(v1*v2));
			 
			regresar= prompt( " Press any key to continue ");
			
				 if  (regresar < pit) {
					
				console.clear();
                }
          }
		
    	    seleccion = Number(prompt( "1. Make a sum\n\
    2. Perform a rest\n\
    3. Perform a multiplication\n\
    4.Make a division\n\
	0. Exit the program"));
				if (seleccion === 4) {
			
			v1=Number(prompt("	Enter a variable "));
            
			v2=Number(prompt( " Enter another variable "));
            console.log( "The result of division	"+v1+"	y "+v2+" Is "+(v1/v2));
			 
			regresar= prompt( " Press any key to continue ");
			
				 if   (regresar < pit) {
					
				console.clear();
                }
          }
  }