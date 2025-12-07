document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.btn-quick-add');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            alert('Product added to cart!');
        });
    }

    var links = document.querySelectorAll('.nav-link');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href.indexOf('#') === 0) {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
});

