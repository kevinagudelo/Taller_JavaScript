function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  var value=25820000; 
  var employees= $(' #employes').val();
  var send = ("Bonus for employe is	" +  value/employees);
 
  
   $('#send').attr('data-content', send);
    $('[data-toggle="popover"]').popover('show');
}
function evento11() {
  $('#form1').submit((e) => {
    e.preventDefault();
  });
    gasoline=20000;
    cash=45000;
    hours= $("#days").val();
  var send = ( "Her win for day is "+( hours*cash-gasoline));
 $('#send1').attr('data-content', send);
  $('[data-toggle="popover1"]').popover('show');
}

function evento111() {
  $('#form11').submit((e) => {
    e.preventDefault();
  });
foot=5280;
centimeter=2.54;
inch=12;
mile=centimeter*inch*foot;
var send = ("In one mile there  "+ mile+ " Centimeters");;
 $('#send11').attr('data-content', send);
  $('[data-toggle="popover11"]').popover('show');
}
//$('#Modal').modal('show');

