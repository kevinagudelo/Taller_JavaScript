$(() => {
  $('#form').submit((e) => {
    e.preventDefault();

 
  var x = ("_____*");
var y = '*';
var j = 1;
 while (j === 1) {
 	for (var i = 0; i < 5; i++) {
 		if (x === '_____*') {
 			  $('#myModal').append(x , "<br>" );
 		}
 		$('#myModal').append(x = x.slice(1) + y ,"<br>");
 	}
 	j++;
 }
     });
});




