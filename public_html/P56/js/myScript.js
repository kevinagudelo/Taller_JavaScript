function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  var sm = 800000;
  var salary = $("#a").val();
  var days = $("#b").val();
  if ((days > 30) || (days <= 0)) {
    var valu = ("Should be maximum 30 days and minimum 0 ");
    $('pay').text(valu);
    sessionStorage.setItem('datos', JSON.stringify(valu));
  }
  p = 80000;
  var dt = (salary / 30);
  var total = (dt * days);
  if (salary <= 2 * sm) {
    var tp = sm * 0.1;
    var text = (" You have transportation aid of 10 percent 	 His salary is " + Math.round(total) + "  more " + p + " TOTAL SALARY " + Math.round(total + tp));
    $('#pay').html(" You have transportation aid of 10 percent 	 His salary is " + Math.round(total) + "  more " + p + " TOTAL SALARY " + Math.round(total + tp));
    sessionStorage.setItem('datos', JSON.stringify(text));

  } else if (((salary >= 4 * sm) && (total >= 4 * sm))) {

    var tr = Math.round(total * (10 / 100));
    var text = (" The retention is " + tr + " Su sueldo es " + Math.round(total - tr));
    $('#pay').html(" The retention is	 Su sueldo es " + (total - tr));
    sessionStorage.setItem('datos', JSON.stringify(text));
  } else {
    var text = Math.round("You have no transportation aid His salary is " + Math.round(total));
    $('#pay').html("You have no transportation aid His salary is " + Math.round(total));
    sessionStorage.setItem('datos', JSON.stringify(text));

  }
}
//$('#Modal').modal('show');

var datos = JSON.parse(sessionStorage.getItem('datos'));
$('#pay').text(datos);

