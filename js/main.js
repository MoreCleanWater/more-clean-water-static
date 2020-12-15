const findWater = function () {
    const sidebar__button = document.getElementById("sidebar__button");
    const sidebar__maplabels = document.getElementById("sidebar__maplabels");
    const sidebar__mainmenu = document.getElementById("sidebar__mainmenu");
    const container = document.getElementById("container");
    const bottomBar = document.getElementById("bottom-bar");

    sidebar__button.addEventListener("click", activateOverlay);
    sidebar__maplabels.addEventListener("click", closeOverlay);
    sidebar__mainmenu.addEventListener("click", closeOverlay);
    container.addEventListener("click", closeOverlay);
    bottomBar.addEventListener("click", closeOverlay);
    
    function activateOverlay() {
        sidebar__menu.classList.add('show');
    }
    
    function closeOverlay(){
        sidebar__menu.classList.remove('show');
    }
}

findWater();