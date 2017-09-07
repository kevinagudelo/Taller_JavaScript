$('#a').hide();
$('#b').hide();
$('#c').hide();
$('#d').hide();
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

    function personalref() {
      registro.name = $("#name").val();
      registro.surname = $("#surname").val();
      registro.id = $("#id").val();
      registro.phone = $("#phone").val();
      registro.email = $("#email").val();
      return registro;
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

    function family() {
      familyref.namef = $("#namef").val();
      familyref.surnamef = $("#surnamef").val();
      familyref.pos = $("#direcf").val();
      familyref.phone = $("#phonef").val();
      familyref.email = $("#emailf").val();
      return familyref;
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
  $('#form').hide("slow");
  $('#head').hide("slow");
  $('#c').show("slow");

  $('#sendw1').click(function () {

    function work() {
      familyref.company = $("#company").val();
      familyref.manager = $("#manager").val();
      familyref.position = $("#position").val();
      familyref.phone = $("#phonew").val();
      familyref.email = $("#emailw").val();
      return familyref;
    }


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

    function description() {
      profesional.description = $("#description").val();
      return profesional;
    }


  });
  $('#sendd2').click(function () {
    $("#d").hide();
    $('#form').show("slow");
    $('#head').show("slow");



  });

});