const { expect, browser, $ , keys} = require('@wdio/globals')
const asserts = require("assert")


describe('EPAM TEST', () => {
    
        it('UC-3 Test Login form with credentials by passing Username & Password:', async () => {
            await browser.url(`https://www.saucedemo.com/`)
            //Type credentials in username which are under Accepted username are sections.
            //Enter password as secret sauce.
            await $('#user-name').setValue('standard_user')
            await $('#password').setValue('secret_sauce')
        
            //Click the "Login" button.
            await $('#login-button').click()

            //Click on Login and validate the title “Swag Labs” in the dashboard.
            const header = await $('div[class = "header_label"]')
            asserts.equal(await header.getText(),"Swag Labs")

            
        })

})