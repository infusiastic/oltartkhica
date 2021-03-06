$.getScript("input_codes.js");
$.getScript("modifiers.js");

var current_variants = [];

function add_letter(c) {
  $("#current_code").text($("#current_code").text() + String.fromCodePoint(c));
}

function erase_last() {
  if ($("#current_code").text()=="") {
    $("#ithkuil_input").val($("#ithkuil_input").val().substr(0, $("#ithkuil_input").val().length - 1));
    $("#ithkuil_input").val(assemble_last($("#ithkuil_input").val()));
  }
  else {
      $("#current_code").text($("#current_code").text().substr(0, $("#current_code").text().length - 1));
  }
}

function erase_all() {
  $("#current_code").text('');
}

function update_variants() {
  var s = $("#current_code").text();
  var keys = input_keys();
  if ($.inArray(s, keys) == -1) {
    current_variants = [];
    $("#input_matches").text('');
  }
  else {
    var im = "";
    var i = 1;
    current_variants = input_codes[s];
    $.each(current_variants, function(i, j) {
      im = im + (i+1) + j + " ";
      $("#input_matches").text(im);
    });
  }
}

function choose_variant(i) {
  if (i<=current_variants.length) {
    var selected_variant = current_variants[i-1];
    if (selected_variant.length>1) { selected_variant = selected_variant.substring(1,selected_variant.length)}    
    $("#ithkuil_input").val($("#ithkuil_input").val() + selected_variant);
    $("#ithkuil_input").val(assemble_last($("#ithkuil_input").val()));
    current_variants = [];
    $("#input_matches").text('');
    $("#current_code").text('');
  }
}

function input_keys() {
  return $.map(input_codes, function(element, index) {
    return index
  });
}

$(document).ready(function() {
  // Set focus to input area at start
  $("#ithkuil_input").focus()
  // Process the input
  $(document).keydown(function(event) {
    if ($("#ithkuil_input").is(":focus")) {
      // Do not modify the behaviour if any of the modifier keys are pressed
      if (!(event.metaKey || event.altKey || event.shiftKey)) {
        console.log((event.metaKey || event.altKey || event.shiftKey));
        if (event.keyCode >= 65 && event.keyCode <= 90) {
          add_letter(event.keyCode);
        }
        else if (event.keyCode >= 48 && event.keyCode <= 57) {
          choose_variant(event.keyCode-48);
        }
        else if (event.keyCode == 8) {
          erase_last();
        }
        else if (event.keyCode == 27) {
          erase_all();
        }
        else if (event.keyCode == 32) {
          if (current_variants.length > 0) {
            choose_variant(1);
          }
          else {
            $("#ithkuil_input").val($("#ithkuil_input").val() + ' ');
          }
        }
        update_variants();
        event.preventDefault();
      };
    };
  });
});
