$('#a').hide();
$('#b').hide();
$('#c').hide();
$('#d').hide();
$('#print').hide();
var registro = {
};
var familyref = {

};
var workref = {

};
var profesional = {

};
$('#evento1').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#head').hide("slow");
    $('#a').show("slow");

    $('#send1').click(function () {
        registro.name = $("#name").val();
        registro.surname = $("#surname").val();
        registro.id = $("#id").val();
        registro.phone = $("#phone").val();
        registro.email = $("#email").val();
        $("#a").hide();
        $('#form').show("slow");
        $('#head').show("slow");

        console.log(registro.name);
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
        familyref.namef = $("#namef").val();
        familyref.surnamef = $("#surnamef").val();
        familyref.pos = $("#direcf").val();
        familyref.phone = $("#phonef").val();
        familyref.email = $("#emailf").val();
        $("#b").hide();
        $('#form').show("slow");
        $('#head').show("slow");
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
    $('#form').hide("slow");
    $('#head').hide("slow");
    $('#c').show("slow");

    $('#sendw1').click(function () {
        workref.company = $("#company").val();
        workref.manager = $("#manager").val();
        workref.position = $("#position").val();
        workref.phone = $("#phonew").val();
        workref.email = $("#emailw").val();
        $("#c").hide();
        $('#form').show("slow");
        $('#head').show("slow");
    });
    $('#sendw2').click(function () {
        $("#c").hide();
        $('#form').show("slow");
        $('#head').show("slow");



    });

});

$('#evento4').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#head').hide("slow");
    $('#d').show("slow");
    

    $('#sendd1').click(function () {
        profesional.description = $("#description").val();
        $("#d").hide();
        $('#form').show("slow");
        $('#head').show("slow");

    });
    $('#sendd2').click(function () {
        $("#d").hide();
        $('#form').show("slow");
        $('#head').show("slow");



    });

});
$('#evento5').click(function () {
    $('#form').submit((e) => {
        e.preventDefault();
    });
    $('#form').hide("slow");
    $('#head').hide("slow");
    $('#print').show("slow");

    $("#3").append("<h2>Currículum vítae</h2> <br><br> \n\
<h3> Personal Information </h3>\n\
<b> Name : </b>" + registro.name + "<br>\n\
<b> Surname : </b> " + registro.surname + "<br>\n\
<b> I.D :</b> " + registro.id + "<br>\n\
<b> Phone :</b> " + registro.phone + "<br>\n\
<b> Email :</b> " + registro.email);
    $("#4").html(" <h3> Family Reference </h3>\n\
<b> Name : </b>" + familyref.namef + "<br>\n\
<b> Surname : </b> " + familyref.surnamef + "<br>\n\
<b> Adress :</b> " + familyref.pos + "<br>\n\
<b> Phone :</b> " + familyref.phone + "<br>\n\
<b> Email :</b> " + familyref.email);
    $("#5").html(" <h3> Work Reference </h3>\n\
<b> Name of company : </b>" + workref.company + "<br>\n\
<b> Account Manager : </b> " + workref.manager + "<br>\n\
<b> Position :</b> " + workref.position + "<br>\n\
<b> Phone :</b> " + workref.phone + "<br>\n\
<b> Email :</b> " + workref.email);
    $("#6").html(" <h3> Profile Description </h3>\n\
<b>Description: </b>" + profesional.description);

    $('#sendp2').click(function () {
        $("#print").hide();
        $('#form').show("slow");
        $('#head').show("slow");



    });

});
