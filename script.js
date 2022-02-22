
   
document.getElementById("open-sidebar").onclick = function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";
}


document.getElementById("close-sidebar").onclick = function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
}


document.getElementById("snackbar-btn").onclick = function openSnackbar(){
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
