Feature('login');

Scenario('test something',  ({ I }) => {
    I.amOnPage('/')
    I.wait('#cpestana1')
    I.fillField('#UserName', 'narvaezja')
    I.fillField('#Password', 'Jesus10701.')
    I.saveScreenshot('login.png')
    I.wait('#boton')
    I.click('#boton')
    I.wait(27)
    I.waitForElement('#paginaCalendario')
    I.saveScreenshot('main.png')
    I.wait(10)
    I.click('body > div.pageBody > div.banner > table > tbody > tr > td:nth-child(4) > a')
    I.waitForElement('body > div > div.SesionCerrada')
    I.saveScreenshot('logout.png')
    I.wait(10)
});
