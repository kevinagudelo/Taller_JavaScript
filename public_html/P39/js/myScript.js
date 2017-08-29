$(() => {
  $('#form').submit((e) => {
    e.preventDefault();
    let name = "Hello, I am " + $('#name').val() + " and I feel happy To learn JavaScript using jQuery ";
    $('#send').attr('data-content', name);
    $('[data-toggle="popover"]').popover('show');
  });
});
