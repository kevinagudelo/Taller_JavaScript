$('#a').hide();
$('#b').hide();
$('#print').hide();
$('#d').hide();
$('#print').hide();
var arreglo = [];
var i;
$('#evento1').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#head').hide("slow");
    $('#a').show("slow");

    $('#send1').click(function () {
        var max = $("#size").val();
        for (i = 0; i < max; i++) {
            arreglo[i] = Math.round((Math.random()) * 10);
            $("#numbers").append(arreglo[i] + ", ");

        }
    });
    $('#send2').click(function () {
        $("#a").hide();
        $('#form').show("slow");
        $('#head').show("slow");
    });

});
$('#evento2').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#head').hide("slow");
    $('#b').show("slow");

    $('#sendf1').click(function () {
        var temp = false;
        var value = $("#element").val();
        arreglo.forEach((e, i) => {
            if (e == value) {
                console.log("hola");
                $("#serched").append("The value " + value + " Is in the position " + i + "<br>");
            } else {
                temp = true;
            }
        });
        if (temp) {
            $("#serched").append("No more matches found ");
        }

    });
    $('#sendf2').click(function () {
        $("#b").hide();
        $('#form').show("slow");
        $('#head').show("slow");



    });

});
$('#evento3').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    for (var i = 1; i < arreglo.length; i++)
    {
        for (var j = 0; j < (arreglo.length - i); j++)
        {
            if (arreglo[j] > arreglo[j + 1])
            {
                k = arreglo[j + 1];
                arreglo[j + 1] = arreglo[j];
                arreglo[j] = k;
            }
        }
    }
});

$('#evento4').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    var swapped;
    do {
        for (var i = 0; i < arreglo.length - 2; i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                var temp = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
        swapped = false;
        for (i = arreglo.length - 2; i > 0; i--) {
            if (arreglo[i] > arreglo[i + 1]) {
                var temp1 = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = temp1;
                swapped = true;
            }
        }
    } while (swapped);

});
$('#evento5').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    var length = arreglo.length;
    for (var i = 1; i < length; ++i) {
        var temp = arreglo[i];
        var j = i - 1;
        for (; j >= 0 && arreglo[j] > temp; --j) {
            arreglo[j + 1] = arreglo[j];
        }
        arreglo[j + 1] = temp;
    }

});

$('#evento6').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });

    if (arreglo.length < 2)
        return arreglo;

    var middle = parseInt(arreglo.length / 2);
    var left = arreglo.slice(0, middle);
    var right = arreglo.slice(middle, arreglo.length);



    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());



});
$('#evento7').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    for (var i = 1; i < arreglo.length; i++)
    {
        for (var j = 0; j < (arreglo.length - i); j++)
        {
            if (arreglo[j] > arreglo[j + 1])
            {
                k = arreglo[j + 1];
                arreglo[j + 1] = arreglo[j];
                arreglo[j] = k;
            }
        }
    }

});
$('#evento8').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#head').hide("slow");
    $('#print').show("slow");
            
    for (i = 0; i < arreglo.length; i++) {
            $("#numbersp").append(arreglo[i] + ", ");

        }
            

       
  
    $('#sendp2').click(function () {
        $("#print").hide();
        $('#form').show("slow");
        $('#head').show("slow");
    });
});