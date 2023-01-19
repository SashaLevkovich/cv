window.onload = () => {
    slider.init();
    setInterval(function () {
        slider.right();
    }, 7000);
};
