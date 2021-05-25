let header = document.getElementById("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.transition = "0.3s";
        header.style.backgroundColor = "#00000080";
    } else {
        header.style.backgroundColor = "transparent";
    }
}
