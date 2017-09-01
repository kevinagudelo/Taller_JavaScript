function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  var a = $("#a").val();
  var b = $("#b").val();
  var result = Math.hypot(a, b);
  var valu = (" The hypotenuse of the triangle is	" + (result));
  sessionStorage.setItem('datos', JSON.stringify(valu));


}
//$('#Modal').modal('show');

var datos = JSON.parse(sessionStorage.getItem('datos'));
$('#pay').text(datos);

