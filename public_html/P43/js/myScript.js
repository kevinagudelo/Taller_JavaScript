$(() => {
  $('#form').submit((e) => {
    e.preventDefault();
    var a = $("#var1").val();
    var b = $("#var2").val();
    var one = ( a+ ` To   `  +b+" is " + (a ** b));
    var two = (b + "  To  " +a+ " is " + (b ** a));
    var tree = ("The multiplication between" +a+ " And "+b+ " is " + (a * b));
    var four = ("Division between "+a+ " and " +b+ " is " + (a / b));
    var five = ("Division between " +b+ " and " +a+ " is " + (b / a));
    var six = ("Module of the division between "+a+" and " +b+ " is " + (a % b));
    var seven = ("Rest Between "+a+ " and "+b+ " is " + (a - b));
    var eigt = ("Sum Between "+a+ " and " +b+ " is " + (a + b));
    $('#myModal').html(`${one}
    <br> ${two}
    <br> ${tree}
    <br> ${four}
    <br> ${five}
    <br> ${six}
    <br> ${seven}
    <br> ${eigt}`);
  });
});



