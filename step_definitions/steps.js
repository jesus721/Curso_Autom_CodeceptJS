const { I } = inject();

Given('Abri la pagina de inicio de sesion', () => {
  I.amOnPage('/')
});

When('Ingreso el usuario {string} y la contraseña {string}', (user, pass) => {
  I.fillField('#UserName', user)
  I.fillField('#Password', pass)
  I.saveScreenshot('inicioSesion.png')
});

When('Hago clic en el boton de inicio de sesion', () => {
  I.waitForElement('#boton')
  I.click('#boton')
  I.wait(27)
});

When('Deberia ver el contenido de la pagina', () => {
  I.waitForElement('#paginaCalendario')
  I.saveScreenshot('contenidoPagina.png')
  I.wait(10)
});

Then('Cierro sesion', () => {  
  I.click('body > div.pageBody > div.banner > table > tbody > tr > td:nth-child(4) > a')
  I.waitForElement('body > div > div.SesionCerrada')
  I.saveScreenshot('sesionCerrada.png')
  I.wait(10)
});