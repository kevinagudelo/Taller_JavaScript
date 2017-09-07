$(() => {
  $('#form').submit((e) => {
    e.preventDefault();

    //PUNTO 1
var as = "*" ;
var n = " " ;
var x = 1 ;
var max = 7 ;

do {
  n += as ;
  $('#myModal').append(n , "<br>" );

  
  x++;
}
while  ( x <= max);
  
   
    });
});




