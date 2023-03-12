const HomePage = require('../pageobjects/home.page')


describe('Volvo Cars Home Page', () => {
 
    it('verify our cars and Menu links', async () => {
        await HomePage.open()
        await HomePage.acceptBtn.click()
        await HomePage.ourCars.click()
        await HomePage.menu.click()
        await HomePage.closeBtn.click()
    })

    it('should open the main url and verify the title', async () => {
        await expect(browser).toHaveTitle("A million more | Volvo Cars - International")
      })
})


