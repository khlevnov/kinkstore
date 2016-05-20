export default class CatalogMenu
{
    constructor() {
        document
            .querySelector('.js-menu-catalog-toggle')
            .addEventListener('click', this.toggleVisibility);

    //    this.sectionTitle = document.querySelector('.menu-catalog__section-title');
    //    this.sectionTitle.addEventListener('click', toggleSection());
    }

    toggleVisibility() {
        this.classList.toggle('is-active');
        document.querySelector('.menu-catalog').classList.toggle('visible');
        document.querySelector('.wrapper').classList.toggle('hidden');
    }

    toggleSection() {
        //
    }
}

var menu = new CatalogMenu;
