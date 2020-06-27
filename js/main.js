var audio = document.getElementById('my_audio');
audio.volume = 0.2;
audio.loop = false;


var direction = document.getElementsByTagName("BODY")[0].getAttribute("dir");

function openDashboard() {
    var dashboard = document.getElementById("dashboardSection");
    var open = document.getElementById("dashboard-open-btn");
    var close = document.getElementById("dashboard-close-btn");
    if (direction === "rtl") {
        dashboard.style.marginRight = "0px";
    } else {
        dashboard.style.marginLeft = "0px";
    }

    open.style.display = "none";
    close.style.display = "block";
}

function closeDashboard() {
    var dashboard = document.getElementById("dashboardSection");
    var open = document.getElementById("dashboard-open-btn");
    var close = document.getElementById("dashboard-close-btn");
    if (direction == "rtl") {
        dashboard.style.marginRight = "-350px";
    } else {
        dashboard.style.marginLeft = "-350px";
    }
    open.style.display = "block";
    close.style.display = "none";
}

$(window).resize(function() {
    if ($(window).width() < 768) {} else {
        openDashboard();
    }
});

/* Start scroll up-down controller */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        document.getElementById("my-header-top").style.marginTop = "-40px";
    } else {
        document.getElementById("my-header-top").style.marginTop = "0px";
    }
    prevScrollpos = currentScrollPos;
};
/* End scroll up-down controller */