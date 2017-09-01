function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  }
  );
  var a = $("#a").val();
  var b = $("#b").val();
  console.log("hola");
  var f1 = moment(a);
  var f2 = moment(b);
  var days = (f2.diff(f1, "days"));
  var months = (f2.diff(f1, "months"));
  var years = (f2.diff(f1, "years"));
  $('#pay').html("Difference in days " + days + "<br>" + "Difference in months " + months + "<br>" + "Difference in years " + years);
}
