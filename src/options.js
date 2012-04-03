
// Saves options to localStorage.
function save_options() {
  var cb = document.getElementById("show-transparency-default");
  var show_default = cb.checked;
  localStorage["show-transparency-default"] = show_default;

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
  if (!show_default) {
    return;
  }
  var cb = document.getElementById("show-transparency-default");
	cb.checked = show_default === 'true';

}
