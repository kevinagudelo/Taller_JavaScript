
var NUM= prompt('Enter the number to know if it is cousin'); 
NUM0 = Number(NUM);
numeroPrimo = true ;
for (i = 1; i <NUM0;i++)
{
	if (NUM0/ i === Math.round(NUM0/i) && i!==1 && i!==NUM0) {
		numeroPrimo = false ;
		break;

	};
    };
if (numeroPrimo)
	console.log (`The number  ${NUM0} Is cousin`);
else
	console.log("The number " + NUM0 + "   "+"no is cousin");













