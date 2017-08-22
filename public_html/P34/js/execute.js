class first {
  constructor (){
  this.arreglo =  [] ;  
  }
menu (){
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
 aleato (){

let max=Number(prompt("Ingrese el maximo del arreglo"));
 for  (let i = 0 ; i < max ;i++){
  this.arreglo[i]=Math.round((Math.random())*100);
 }
 return max;
}
sequential (){

	 var value=Number(prompt("Enter the sequential value"));
	
	for ( let i = 0 ;i < this.arreglo.length ; i++ ){
		if  (this.arreglo[i]=== value){
			console.log( "The value "+value+"Is in the position" +i);
            break;
			
		  }else {
		console.log( "The value you want to search is not in the array");
        break;
      }			
    }
  } 


buble()
	{
		for(var i=1;i<this.arreglo.length;i++)
		{
			for(var j=0;j<(this.arreglo.length-i);j++)
			{
				if(this.arreglo[j]>this.arreglo[j+1])
				{
					k=this.arreglo[j+1];
					this.arreglo[j+1]=this.arreglo[j];
					this.arreglo[j]=k;
				}
			}
		}
        for(i=0;i<this.arreglo.length;i++)
	{
		console.log(this.arreglo[i]);
	}
		return this.arreglo;
	}
 bublebi(){	
var swapped;
	do {
		for(var i = 0; i < this.arreglo.length - 2; i++) {
			if(this.arreglo[i] > this.arreglo[i+1]) {
				var temp = this.arreglo[i];
				this.arreglo[i] = this.arreglo[i+1];
				this.arreglo[i+1] = temp;
				swapped = true;
			}
		}	
		if(!swapped) {
			break;
		}
		swapped = false;
		for( i = this.arreglo.length - 2; i > 0; i--) {
			if(this.arreglo[i] > this.arreglo[i+1]) {
				var temp1 = this.arreglo[i];
				this.arreglo[i] = this.arreglo[i+1];
				this.arreglo[i+1] = temp1;
				swapped = true;
			}
		}
	} while(swapped);
    
//     for(i=0;i<arreglo.length;i++)
//	{
//		console.log(arreglo[i]);
//	}
  return this.arreglo;
}

  insertion(){
  var length = this.arreglo.length;
  for(var i = 1; i < length; ++i) {
    var temp = this.arreglo[i];
    var j = i - 1;
    for(; j >= 0 && this.arreglo[j] > temp; --j) {
      this.arreglo[j+1] = this.arreglo[j];
    }
    this.arreglo[j+1] = temp;
  }
//   for(i=0;i<arreglo.length;i++)
//	{
//		console.log(arreglo[i]);
//	}
  return this.arreglo;
}

 mergeSort(arreglo)
{
    if (this.arreglo.length < 2)
    var middle = parseInt(this.arreglo.length / 2);
    var left   = this.arreglo.slice(0, middle);
    var right  = this.arreglo.slice(middle, this.arreglo.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
 merge(left, right)
{
   this.result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            this.result.push(left.shift());
        } else {
            this.result.push(right.shift());
        }
    }
 
    while (left.length)
        this.result.push(left.shift());
 
    while (right.length)
        this.result.push(right.shift());
 
    return this.result;
} sele() {
    
  		for(var i=1;i<this.arreglo.length;i++)
		{
			for(var j=0;j<(this.arreglo.length-i);j++)
			{
				if(this.arreglo[j]>this.arreglo[j+1])
				{
					k=this.arreglo[j+1];
					this.arreglo[j+1]=this.arreglo[j];
					this.arreglo[j]=k;
				}
			}
		}
        return this.arreglo;
	}


 validate (){
  let selection=this.menu();
  switch (selection) {
    case 1:
      
      var array= this.aleato();
      this.validate ();
      break;
    case 2:
     this.sequential(array);
      this.validate ();
     break;
   case 3:
   this.buble(array);
    this.validate ();
    break;
  case 4:
  this.bublebi(array);
   this.validate ();
  break;
case 5:
this.insertion(array);
 this.validate ();
break;
case 6:
console.log(this.mergeSort(arreglo));
 this.validate ();
break;
case 7:
this.sele(array); 
this.validate ();
break
case 8:
console.log(this.arreglo); 
this.validate ();
case 0:
alert ("Byee");
break;

default:this.validate ();
      
break;
  }
}
}
let what = new first ();
what.validate();
