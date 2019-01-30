/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    let myTopNavValue = document.getElementById("myTopnav");
    if (myTopNavValue.className === "topnav") {
        myTopNavValue.className += " responsive";
    } else {
        myTopNavValue.className = "topnav";
    }
}
