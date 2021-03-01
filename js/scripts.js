// contact constructor. Business Logic

function Contact(first, last){
  this.FirstName = first;
  this.LastName = last;
}

// code to collect user input from the form . UI Logic

$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'> " +newContact.FirstName+" </span></li>");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});

