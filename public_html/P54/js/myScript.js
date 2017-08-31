function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
var a = $("#a").val();
var b=$("#c").val();

var rest;


var  s;
var p;
var ts;
var rest;

rest=(a*(b/100));
answer= (" DISCOUNT TOTAL "+rest+" WAGE RECEIVED BY THE WORKER  "+(a-rest));
    $('#send').attr('data-content', "THE RESULT OF "+ answer);
    $('[data-toggle="popover"]').popover('show');
}

//$('#Modal').modal('show');

