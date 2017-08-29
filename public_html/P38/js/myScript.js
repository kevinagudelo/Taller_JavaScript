function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  var texto = $('#texto').val();
  $('#segundo').text(texto);
}
//$('#Modal').modal('show');

