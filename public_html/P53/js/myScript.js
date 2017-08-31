function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
var a = $("#a").val();
var b=$("#b").val();
var c= $("#c").val();
var d = $("#d").val();
var answer;


if(a=="x"||a=="X" ){
	   answer=(c*b)/d;
	
	}
if(b=="x"||b=="X" ){
	  answer=(a*d)/c;
	
	}
if(c=="x" ||c=="X"){
	  answer=(a*d)/b;
	
	}
if(d=="x" ||d=="X"){
	  answer=(b*c)/a;
	
	}
    $('#send').attr('data-content', "The result is "+ answer);
    $('[data-toggle="popover"]').popover('show');
}

//$('#Modal').modal('show');

