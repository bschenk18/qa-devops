
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const { title, addDuo, removeDuo } = require("../functions/main.js")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Title shows up when page loads`, async () => {
    await title(driver)

    await driver.sleep(3000)
})

test('Add to Duo', async () => {
    const addDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await addDuo.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Add to Duo`, async () => {
    await addDuo(driver)

    await driver.sleep(3000)
})

test('Removed from Duo', async () => {
    const removeDuo = await driver.findElement(By.id('choices'))
    const displayed = await removeDuo.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Remove from Duo`, async () => {
    await removeDuo(driver)

    await driver.sleep(3000)
})