const { expect, browser, $ , keys} = require('@wdio/globals')
const asserts = require("assert")


describe('EPAM TEST', () => {
    
         it('UC-1 Test Login form with empty credentials:', async () => {

            //Open browser
            await browser.url(`https://www.saucedemo.com/`)
            //Type any credentials itno "User Name" and "Password"
            let user = await $('#user-name')
            await user.setValue('standard_user')
            let password = await $('#password')
            await password.setValue('secret_sauce')
            //Clear the inputs
            //await user.click()
            
            await user.clearValue()
            asserts(await user.getText() === '')
            await password.clearValue()
            asserts(await password.getText() === '')
            await browser.pause(5000)

            await browser.url(`https://www.saucedemo.com/`)
            await $('#login-button').click()

            //Check the error messages: "Username is required"
            const err = await $('div[class="error-message-container error"]').getText()
            asserts.equal(err,"Epic sadface: Username is required")
            
        })

})