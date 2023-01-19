const slider = {
    slides: [
        'https://sashalevkovich.github.io/js-from-zero-to-hero-2023/assets/images/memes/mem.jpeg',
        'https://sashalevkovich.github.io/js-from-zero-to-hero-2023/assets/images/memes/mem1.jpeg',
        'https://sashalevkovich.github.io/js-from-zero-to-hero-2023/assets/images/memes/mem2.jpeg',
        'https://sashalevkovich.github.io/js-from-zero-to-hero-2023/assets/images/memes/mem3.jpeg',
    ],
    frame: 0,
    set: function (image) {
        document.getElementById(
            'meme__slider_container'
        ).style.backgroundImage = `url(${image})`;
    },
    init: function () {
        this.set(this.slides[this.frame]);
    },
    left: function () {
        this.frame--;
        if (this.frame < 0) this.frame = this.slides.length - 1;
        this.set(this.slides[this.frame]);
    },
    right: function () {
        this.frame++;
        if (this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    },
};
