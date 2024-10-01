const { expect, browser, $ , keys} = require('@wdio/globals')
const asserts = require("assert")


describe('EPAM TEST', () => {
        
        it('UC-2 Test Login form with credentials by passing', async () => {
            await browser.url(`https://www.saucedemo.com/`)
            //Type any credentials in username.
            await $('#user-name').setValue('standard_user')
            await $('#password').setValue('secret_sauce')
            
            //Clear the "Password" input.
            await browser.url(`https://www.saucedemo.com/`)
            await $('#user-name').setValue('standard_user')

            //Cick the "Login" button.
            await $('#login-button').click()

            //Check the error messages: "Password is required".
            const err = await $('div[class="error-message-container error"]').getText()
            asserts.equal(err,"Epic sadface: Password is required")
        })

})