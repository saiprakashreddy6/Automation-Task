const carModelsPage = require('../pageobjects/carModels.page')
const HomePage = require('../pageobjects/home.page')


describe('Explore our models', () => {
 
    it('verify our cars and Menu links', async () => {
        await HomePage.open()
        await HomePage.acceptBtn.click()       
    })

      it('should verify the car category list', async () => {
        browser.pause(5000)
        const carList = await browser.$$('h3').map((element) => element.getText())
        console.log(carList)
      })
    
})