

const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class carModelsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get nextBtn () {
        return $("//button[@data-autoid='springCarouselNextButton']")
    }

}

module.exports = new carModelsPage();
