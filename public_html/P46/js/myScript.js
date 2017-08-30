$(() => {
  $('#form').submit((e) => {
    e.preventDefault();
    var b = $("#var2").val();
    
 $('#myModal').html(b % 2  === 0 ? +b+" It's an even number":+b+ " It is an odd number");

   
    });
});




