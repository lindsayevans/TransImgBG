
// Saves options to localStorage.
function save_options() {
  var cb = document.getElementById("show-transparency-default");
  var show_default = cb.checked;
  localStorage["show-transparency-default"] = show_default;

  var background_colour = document.getElementById("background-colour").value;
  localStorage["background-colour"] = background_colour;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 5000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {

  var show_default = localStorage["show-transparency-default"];
  var cb = document.getElementById("show-transparency-default");
	cb.checked = show_default === 'true';

  var background_colour = localStorage["background-colour"] || '#fff';
  document.getElementById("background-colour").value = background_colour;

}
//localStorage.clear();
