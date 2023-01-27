var list = ["showActus", "showCulture", "showVideo"];

function toggle(id)
{
  list.forEach(show => {
    if(show != id)
    {
      document.getElementById(show).classList.remove("show");
    }
  });
  document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!(event.target.matches('.dropbtn') || event.target.matches('.dropdown-content'))) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}