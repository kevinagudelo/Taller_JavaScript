$('#a').hide("slow");
function evento1() {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#a').show("slow");



    $('#send1').click(function () {
      var one = parseInt($("#1").val());
        var two = parseInt($("#2").val());
        $("#3").html(`The result of de sum is ${one + two}`);

    });
}
function evento2() {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#a').show("slow");



    $('#send1').click(function () {
        var one = parseInt($("#1").val());
        var two = parseInt($("#2").val());
        $("#3").html(`The result of de sustraction is ${one - two}`);

    });
}
function evento3() {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#a').show("slow");
$('#send1').click(function () {
        var one = parseInt($("#1").val());
        var two = parseInt($("#2").val());
        $("#3").html(`The result of de multiplication is ${one * two}`);

    });
}
function evento4() {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#a').show("slow");
$('#send1').click(function () {
        var one = parseInt($("#1").val());
        var two = parseInt($("#2").val());
        $("#3").html(`The result of de division is ${one / two}`);

    });
}
