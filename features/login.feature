Feature: Login
    Como usuario
    Yo puedo iniciar sesion en la aplicacion

    Scenario: Usuario puede iniciar sesion
        Given Abri la pagina de inicio de sesion
        When Ingreso el usuario "narvaezja" y la contraseña "Jesus10701."
        And Hago clic en el boton de inicio de sesion
        And Deberia ver el contenido de la pagina
        Then Cierro sesion
