
  function activateOverlay() {
    // show overlay
    var showMenu = document.getElementById("water-menu");
    showMenu.style.width = '200px';
    showMenu.style.height = 'auto';
    showMenu.style.backgroundColor = '#fff';
    mui.overlay('on',showMenu);
  }

  function closeOverlay(){
    mui.overlay('off');
  }