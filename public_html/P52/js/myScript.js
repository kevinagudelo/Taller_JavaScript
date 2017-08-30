function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
var a = $("#a").val();
var b=$("#b").val();
var p;
var r;
p=(2*a+2*b);
var send=( "The perimetre of your  rectangle is  "+p);
r=a*b;
var sen1=( " The area of  rectangle is		"+r);
 
  
   $('#send').attr('data-content', send+sen1);
    $('[data-toggle="popover"]').popover('show');
}

//$('#Modal').modal('show');

