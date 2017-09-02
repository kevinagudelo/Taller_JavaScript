function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  }
  );
  var h = $("#a").val();
  var day;
  var week;
  day = (h / 24);
  week = (h / 168);
  $('#pay').html("Those hours are equivalent to :" + "<br>" + day + "	Days	" + "<br>" + week + "	Weeks");
}
