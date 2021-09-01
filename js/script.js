$(".burger-menu-open").on("click", ()=> {
    $(".header-menu").css({"top":"0", "right":"0", "border-radius": "0",})
})

$(".burger-menu-close").on("click", ()=> {
    $(".header-menu").css({"top":"-100%", "right":"-100%", "border-radius": "0 0 0 90%",})
})