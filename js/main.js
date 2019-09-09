// Smooth Scrolling
$('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('hmtl, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});