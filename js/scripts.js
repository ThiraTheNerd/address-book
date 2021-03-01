// contact constructor. Business Logic

function Contact(first, last){
  this.FirstName = first;
  this.LastName = last;
}

Contact.prototype.fullName = function(){
  return this.FirstName + " " + this.LastName;
}

// code to collect user input from the form . UI Logic

$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'> " + newContact.fullName() + " </span></li>");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function(){
      $(".show-contact").show();
      $(".show-contact h2").text(newContact.FirstName);
      $(".first-name").text(newContact.FirstName);
      $(".last-name").text(newContact.LastName);

    });
  });
});

