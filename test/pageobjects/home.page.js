

const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get ourCars () {
        return $("//button[@id='nav:topNavCarMenu']")
    }

    get acceptBtn () {
        return $("//button[@id='onetrust-accept-btn-handler']")
    }

    get menu () {
        return $("//button[@id='sitenav-sidenav-toggle']")
    }

    get closeBtn () {
        return $("//button[@data-autoid='nav:siteNavCloseIcon']")
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new HomePage();
