var user, key;

user=prompt("Ingrese su usuario: ")
prompt("Ha ingresado como: "+user)

key=prompt("Ingrese la llave: ")
prompt("La llave que ingreso es: "+key)

if (user=="Eczy" && key=="Blue56") {
prompt("Ha ingresado correctamente.")
} else if (user !="Eczy" && key =="Blue56") {
prompt("El usuario "+user+" no es correcto pero la llave si.")
} else if (user =="Eczy" && key !="Blue56") {
prompt("La llave "+key+" es incorrecta, pero el usuario si.")
} else {
prompt("No ha podido accesar, debido a que no ingreso correctamente los 2 datos.")
}

if (user=="Eczy" && key =="Blue56") {
document.write("Usuario correcto: "+user+" ")
document.write("Llave correcta: "+key+" ")
} else {
document.write("No se ha podido acceder.")
}