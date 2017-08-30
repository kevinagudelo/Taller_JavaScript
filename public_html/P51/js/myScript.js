function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
  var send;
  var old;
old = $("#age").val();
if (old<18) {
    send=("You are under 18 years of age denied access");
    $('#send').attr('data-content', send);
    $('[data-toggle="popover"]').popover('show');
} else {   send=("You are of age welcome to the party");
    $('#send').attr('data-content', send);
    $('[data-toggle="popover"]').popover('show');
  }
}
//$('#Modal').modal('show');

