var user = "Example"
var key = "1234"

if (user == "Example1" && key == "1234") {
print("El usuario y clave han sido digitados correctamente")

} else if (user == "Example1" && key != "1234") {
    print("El usuario "+user+" ha sido ingresado correctamente, pero la clave "+password+" no ha sido correcta.")
    } else if (user != "Example1" && key == "1234") {
        print("This user "+user+" is correct, but the password "+key" not correct.")
    }
    else {
    print("This user "+user+" and key "+key+" not specified.")
}
