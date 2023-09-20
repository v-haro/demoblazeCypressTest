import HomePage from '../pages/HomePage';

export default class ArticleCounter {
    constructor() {
        this.home = new HomePage();
    }

    countArticlesInCategory(categoryName) {
        this.home.goToCategory(categoryName);
        return cy.get('div#tbodyid div.card-block').its('length');
    }

    getTotalArticles() {
        let articles = 0;
        return this.countArticlesInCategory('Phones').then((count) => {
            articles += count;
            return this.countArticlesInCategory('Laptops');
        }).then((count) => {
            articles += count;
            return this.countArticlesInCategory('Monitors');
        }).then((count) => {
            articles += count;
            return articles;
        });
    }
}
