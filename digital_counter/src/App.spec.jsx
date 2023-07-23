import {test, expect} from '@playwright/experimental-ct-react'
import App from './App'
import Tasbeeh from './Tasbeeh'

//Locating the element using classname for counter increment
const counterIncrement = '[class="Btn1"]'

//Locating the element using classname for counter decrement
const counterDecrement = '[class="Btn4"]'

//Locating the element using classname for counter Reset
const counterReset = '[class="Btn2"]'

//Locating the element using classname for counter Reset
const displayPrayer = '[class="Btn3"]'



// Test to validate on clicking '+' button count is increasing

test('To validate counter value is incrementing when clicking the + button', async({mount})=> {

    //Mounting this App component to Playwright index.html root element
    const appComponent= await mount(<App />)

    // Validating the button text

    await expect(appComponent.locator(counterIncrement)).toHaveText('+')

    //Clicking the '+' button
    await appComponent.locator(counterIncrement).click();
    
     // Validate - It should increment the counter value to 1
    
     await expect(appComponent.locator('h2')).toContainText("Tasbeeh count is : 1 ")
})


// Test to validate on clicking 'Reset' button count should set to 0
test('To validate counter value is Resetting to 0 when clicking the Reset button', async({mount})=> {

    //Mounting this App component to Playwright index.html root element
    const appComponent= await mount(<App />)

    // Validating the button text

    await expect(appComponent.locator(counterReset)).toHaveText('Reset')

    //Clicking the 'Reset' button
    await appComponent.locator(counterReset).click();
    
    // Validate - It should Reset the counter value to 0
    
    await expect(appComponent.locator('h2')).toContainText("Tasbeeh count is : 0 ")
})

// Test to validate on clicking '-' button count is decreasing
test('To validate counter value is decrementing when clicking the - button', async({mount})=> {

    //Mounting this App component to Playwright index.html root element
    const appComponent= await mount(<App />)

    // Validating the button text

    await expect(appComponent.locator(counterDecrement)).toHaveText('-')

    //Clicking the '-' button
    await appComponent.locator(counterDecrement).click();
    
    // Validate - It should decrement the counter value to -1
    
    await expect(appComponent.locator('h2')).toContainText("Tasbeeh count is : -1 ")
})

// Test to validate when user not clicking Display Prayer button the Text is 'Time for Fajr Prayer'

test('To validate when user not clicking Dislayer Prayer button then what prayer name', async({mount})=> {

    //Mounting this App component to Playwright index.html root element
    const appComponent= await mount(<App />)

    // Validating the button text

    await expect(appComponent.locator(displayPrayer)).toHaveText('Display Prayer')

    //Clicing the Display Prayer button


    // Validate the Prayer name

   await expect(appComponent.locator('h1')).toHaveText("Time for Fajr Prayer")

})

// Test to validate when user  clicking Display Prayer button the Text should be 'Time for Esha Prayer'

test('To validate when user  clicking Dislay Prayer button then Esha prayer name should appear', async({mount})=> {

    //Mounting this App component to Playwright index.html root element
    const appComponent= await mount(<App />)

    // Validating the button text

    await expect(appComponent.locator(displayPrayer)).toHaveText('Display Prayer')

    //Clicing the Display Prayer button

    await appComponent.locator(displayPrayer).click();

    // Validate the Prayer name

    await expect(appComponent.locator('h1')).toHaveText("Time for Esha Prayer")

})








