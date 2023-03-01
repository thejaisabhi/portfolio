var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contains");
 var sidemenu = document.getElementById("sidemenu");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontain of tabcontains) {
        tabcontain.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    

 function openmenu() {
        sidemenu.style.right = "0";
    }
 function closemenu() {
        sidemenu.style.right = "-200px";
    }

