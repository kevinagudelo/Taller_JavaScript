$('#a').hide();
$('#b').hide();
$('#print').hide();
$('#d').hide();
$('#print').hide();
var arrangement = [];
var i;
$('#send2').click(function () {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  let code = $("#code").val();
  let name = $("#name").val();
  let data = {
    name,
    code
  };
  if (arrangement === null) {
    arrangement = [
      data = {
        name,
        code
      }
    ];
  } else {
    arrangement.push(data);
  }
  console.log(typeof (arrangement));
  localStorage.setItem('data', JSON.stringify(arrangement));
});
$('#searchcode').click(function () {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  arrangement = JSON.parse(localStorage.getItem('data'));
  var value = $("#codeserch").val();
  for (i = 0; arrangement.length; i++) {
    if (value === arrangement[i].code) {
      $("#codeprint").append("Name  of Book :  " + arrangement[i].name + "<br>" + "Code  : " + arrangement[i].code + "<br>");
    } else
      $("#codeprint").html("Product not found");
  }


});
$('#searchname').click(function () {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  arrangement = JSON.parse(localStorage.getItem('data'));
  var valuer = $("#search").val();
  for (let i = 0; arrangement.length; i++) {
    if (valuer === arrangement[i].name) {
      $("#nameprint").append("Name  of Book :  " + arrangement[i].name + "<br>" + "Code  : " + arrangement[i].code + "<br>");
    } else
      $("#nameprint").html("Product not found");
  }
});


