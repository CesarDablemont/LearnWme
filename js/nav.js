var dataDropdown = "";

function toggle(id)
{
  document.getElementById(id).classList.toggle("show");
  if(dataDropdown != "" && id != dataDropdown)
  {
    document.getElementById(dataDropdown).classList.toggle("show");
  }
  dataDropdown = id;
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!(event.target.matches('.dropbtn') || event.target.matches('.dropdown-content'))) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var dataDropdown = "";
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}