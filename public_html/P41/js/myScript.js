function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  let name = $(' #texto').val();
  var type = $('#Type').val();
  let number = $('#number').val();
  if (type == 1) {
    type = 'Identification Card';
  } else if (type == 2) {
    type = 'Identity card';
  } else if (type == 3) {
    type = 'Foreigner ID';
  }
  $('#segundo').text(("Hello,Mi Name is       " + name +
          " Mi Number of  " + type + " Is   " + number));
}


