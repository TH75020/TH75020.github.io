
import { Selector } from 'testcafe';


fixture `Getting Started`
    .page `file:///C:/Users/dsurreau/Desktop/EPITECH/1511/Materialize%20test/Licorne.html#`;


    const menu = Selector('#navv');

    test('My first test', async t => {
    await t
        .resizeWindow(200, 400)
        .resizeWindow(1000, 500)
        .resizeWindow(200, 400)
        .click('#navv')
        .click('#Clic')
        .resizeWindowToFitDevice("ASUS Padfone")
        .resizeWindow(200, 400)
        .expect(menu.visible).ok();

});