$(() => {
  $('#form').submit((e) => {
    e.preventDefault();
    var b = $("#var2").val();
    
        numeroPrimo = true ;
for (i = 1; i <b;i++)
{
	if (b/ i === Math.round(b/i) && i!==1 && i!==b) {
		numeroPrimo = false ;
		break;

	};
    };
if (numeroPrimo){
	console.log (`The number  ${b} Is cousin`);
    $('#myModal').html(`The number ${b} is cousin`);
    }else{
	console.log("The number " + b + "   "+"no is cousin");
    $('#myModal').html(`The number  ${b} no is cousin`);}

   
    });
});




