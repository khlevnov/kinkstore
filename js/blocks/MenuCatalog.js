export default class MenuCatalog
{
    constructor() {
        let self = this,
            catalogOpenButtons = document.querySelectorAll('.js-menu-catalog-toggle'),
            sectionTitles = document.querySelectorAll('.menu-catalog__section-title');

        Array.from(catalogOpenButtons).forEach(function(button) {
            button.addEventListener('click', self.toggleVisibility);
        });

        Array.from(sectionTitles).forEach(function(title) {
            title.addEventListener('click', self.toggleSection);
        });
    }

    toggleVisibility() {
        this.classList.toggle('is-active');
        document.querySelector('.menu-catalog').classList.toggle('visible');
        document.querySelector('.wrapper').classList.toggle('hidden');
    }

    toggleSection() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            this.nextElementSibling.classList.remove('visible');
        } else {
            this.classList.add('active');
            this.nextElementSibling.classList.add('visible');
        }
    }
}

var menu = new MenuCatalog;
