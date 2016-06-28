function localGate() {
  if(localStorage.getItem("Name") !== null) {
    $(".gate").addClass('hide');
    $(".name").html(localStorage.getItem("Name"))
  }
  
  $('.gateform').submit(function() {
    var name = $(this).find('input[name="name"]').val();
    if (name !== "") { localStorage.setItem('Name', name); }
  });
}

$(document).ready(function(){
  localGate();
});
