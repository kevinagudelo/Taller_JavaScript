$(() => {
  $('#form').submit((e) => {
    e.preventDefault();
    var a = $("#var1").val();
    var b = $("#var2").val();

    var tree = ("The multiplication between" +a+ " And "+b+ " is " + (a * b));
    var four = ("Division between "+a+ " and " +b+ " is " + (a / b));
    var seven = ("Rest Between "+a+ " and "+b+ " is " + (a - b));
    var eigt = ("Sum Between "+a+ " and " +b+ " is " + (a + b));
    $('#myModal').html(`${tree}
    <br> ${four}
    <br> ${seven}
    <br> ${eigt}`);
  });
});



