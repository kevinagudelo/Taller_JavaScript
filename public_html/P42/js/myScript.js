$(() => {
  $('#form').submit((e) => {
    e.preventDefault();
    var a = 50;
    var b = 10;
    let one = (`50 to 10 is  ` + (a ** b));
    var two = (" 10 to 50 is " + (b ** a));
    var tree = ("The multiplication between 50 and 10 is " + (a * b));
    var four = ("Division between 50 and 10 is " + (a / b));
    var five = ("Division between 10 and 50 is " + (b / a));
    var six = ("Module of the division between 50 and 10 is " + (a % b));
    var seven = ("Rest Between 50 and 10 is " + (a - b));
    var eigt = ("Sum Between 50 and 10 is " + (a + b));
    $('#ejemplo').attr('data-content', one);
    $('#two').attr('data-content', two);
    $('#tree').attr('data-content', tree);
    $('#four').attr('data-content', four);
    $('#five').attr('data-content', five);
    $('#six').attr('data-content', six);
    $('#seven').attr('data-content', seven);
    $('#eigh').attr('data-content', eigt);
    $('[data-toggle="popover"]').popover('show');
  });
});



