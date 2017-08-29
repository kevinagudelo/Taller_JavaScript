function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  let name = $(' #texto').val();
  var type = $('#Type').val();
  let number = $('#number').val();
  var gender = $('#Gener').val();
  let height = $('#heigth').val();
  let live = $('#live').val();
  if (type == 1) {
    type = 'Identification Card';
  } else if (type == 2) {
    type = 'Identity card';
  } else if (type == 3) {
    type = 'Foreigner ID';
  }

  if (gender == 1) {
    gender = 'Male';
  } else if (gender == 2) {
    gender = 'Female';
  }
  if (live == 1) {
    live = "True";
    ``
  } else if (live == 2) {
    live = "False";
  }
  console.log(live);
  $('#segundo').text((`Hello,Mi Name is ${name}
   Mi Number of   ${type}   Is  ${number}
   Biological gender   ${gender}
   My height is   ${height}   Cm
   Is it true that I live in Cartago?    ${live}`));
}


