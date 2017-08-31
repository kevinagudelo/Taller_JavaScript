function evento1() {
  $('#form').submit((e) => {
    e.preventDefault();
  });
var number = $("#a").val();
var answer;
  if (number<=0) {
    
    answer=("THE NUMBER POSITIVE IS "+(number*(-1)));
    } else{
        answer=("ENTER A NUMBER LESS THAN ZERO");}
          

    $('#send').attr('data-content', "THE RESULT OF "+ answer);
    $('[data-toggle="popover"]').popover('show');
}

//$('#Modal').modal('show');

