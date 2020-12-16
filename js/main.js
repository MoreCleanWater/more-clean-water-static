const findWater = function () {
    const sidebar__button = document.getElementById("sidebar__button");
    const notifications = document.getElementById("notifications");

    const sidebar__maplabels = document.getElementById("sidebar__maplabels");
    const sidebar__menu = document.getElementById("sidebar__menu");
    const container = document.getElementById("container");
    const bottomBar = document.getElementById("bottom-bar");
    const updatesOverlay = document.getElementById("updates-overlay");

    sidebar__button.addEventListener("click", showOverlay);
    notifications.addEventListener("click", showOverlay);
    
    sidebar__maplabels.addEventListener("click", hideOverlay);
    sidebar__menu.addEventListener("click", hideOverlay);
    container.addEventListener("click", hideOverlay);
    bottomBar.addEventListener("click", hideOverlay);
    updatesOverlay.addEventListener("click", hideOverlay);
    
    function showOverlay(e) {
        document.getElementById(e.currentTarget.getAttribute("target-element")).classList.add('show');
    }
    
    function hideOverlay(e){
        sidebar__menu.classList.remove('show');
        if (updatesOverlay) updatesOverlay.classList.remove('show');
    }
}

findWater();