// Puede realizar cambios en las variables "user" y "key" para probar las condicionales.
var user = "Example1"
var key = "1234"

if (user == "Example1" && key == "1234") {
print("El usuario y clave han sido digitados correctamente.")

} else if (user == "Example1" && key != "1234") {
    print("El usuario "+user+" ha sido ingresado correctamente, pero la clave "+key+" no ha sido correcta.")
    } else if (user != "Example1" && key == "1234") {
        print("El usuario "+user+" es incorrecto pero la llave "+key+" si es correcta.")
    }
    else {
    print("El usuario "+user+" y la llave "+key+" no han sido especificados.")
}
