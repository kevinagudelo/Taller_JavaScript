

var i;
 

function  menu (){
    var selection =Number( prompt(" 1. Fill arrangement\n\
    2. Search element by sequential search method\n\
    3. Apply bubble sorting method \n\
    4. Apply bidirectional bubble sorting method \n\
    5. Apply insertion sort method  \n\
    6. Apply mixing method \n\
    7. Apply the ordering method by selection \n\
    8. Print arrangement \n\
    0. Exit the program"));                    
   return selection;
   
}   
var arreglo =  [] ;

function aleato (){

let max=Number(prompt("Ingrese el maximo del arreglo"));
 for  (i = 0 ; i <= max ;i++){
   arreglo[i]=Math.round((Math.random())*10);
 }
 return max;
}
function sequential (){
        var temp = false ;
	 var value=Number(prompt("Enter the sequential value"));
          arreglo.forEach((e,i )=> {
             if  (e === value){
			console.log( "The value "+value+"Is in the position" +i);
		  }else  {
                      temp = true;
                  }			
    });
    if (temp) {
        console.log ("the value entered was not found ");
    }
  } 


function buble()
	{
		for(var i=1;i<arreglo.length;i++)
		{
			for(var j=0;j<(arreglo.length-i);j++)
			{
				if(arreglo[j]>arreglo[j+1])
				{
					k=arreglo[j+1];
					arreglo[j+1]=arreglo[j];
					arreglo[j]=k;
				}
			}
		}
        for(i=0;i<arreglo.length;i++)
	{
		console.log(arreglo[i]);
	}
		return arreglo;
	}
function bublebi(){	
var swapped;
	do {
		for(var i = 0; i < arreglo.length - 2; i++) {
			if(arreglo[i] > arreglo[i+1]) {
				var temp = arreglo[i];
				arreglo[i] = arreglo[i+1];
				arreglo[i+1] = temp;
				swapped = true;
			}
		}	
		if(!swapped) {
			break;
		}
		swapped = false;
		for( i = arreglo.length - 2; i > 0; i--) {
			if(arreglo[i] > arreglo[i+1]) {
				var temp1 = arreglo[i];
				arreglo[i] = arreglo[i+1];
				arreglo[i+1] = temp1;
				swapped = true;
			}
		}
	} while(swapped);
    
//     for(i=0;i<arreglo.length;i++)
//	{
//		console.log(arreglo[i]);
//	}
  return arreglo;
}

function  insertion(){




  var length = arreglo.length;
  for(var i = 1; i < length; ++i) {
    var temp = arreglo[i];
    var j = i - 1;
    for(; j >= 0 && arreglo[j] > temp; --j) {
      arreglo[j+1] = arreglo[j];
    }
    arreglo[j+1] = temp;
  }
//   for(i=0;i<arreglo.length;i++)
//	{
//		console.log(arreglo[i]);
//	}
  return arreglo;
}

function mergeSort(arreglo)
{
    if (arreglo.length < 2)
        return arreglo;
 
    var middle = parseInt(arreglo.length / 2);
    var left   = arreglo.slice(0, middle);
    var right  = arreglo.slice(middle, arreglo.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
function sele() {
    
  		for(var i=1;i<arreglo.length;i++)
		{
			for(var j=0;j<(arreglo.length-i);j++)
			{
				if(arreglo[j]>arreglo[j+1])
				{
					k=arreglo[j+1];
					arreglo[j+1]=arreglo[j];
					arreglo[j]=k;
				}
			}
		}
        return arreglo;
	}


function validate (){
  var selection=menu();
  switch (selection) {
    case 1:
      
      var array= aleato();
      validate ();
      break;
    case 2:
     sequential(array);
      validate ();
     break;
   case 3:
   buble(array);
    validate ();
    break;
  case 4:
  bublebi(array);
   validate ();
  break;
case 5:
insertion(array);
 validate ();
break;
case 6:
console.log(mergeSort(arreglo));
 validate ();
break;
case 7:
sele(array); 
validate ();
break
case 8:
console.log(arreglo); 
validate ();
case 0:
alert ("Byee");
break;

    default:validate ();
      
      break;
  }
}
validate ();