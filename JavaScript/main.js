let nombre = prompt ('Ingresa tu nombre, sino sos pollo ')
if ((nombre== 'Nahuel') || (nombre == 'Santino'))
{
    alert ('Bienvenido mi lidel ')
}else{
    alert ('Bienvenido')
}
//Punto 2
let edad = prompt('Ingresa tu edad wachin ')
if (edad >= 18)
{
    alert ('Sos mayor de edad')
}else{
    alert ('Sos menor de edad')
}
//Punto 3
function edades(x) {
    x = prompt('Ingrese su otra edad bro ')
    if (x >= 60){
        alert ('Acaso eres un anciano?')
    }
    else if(x >= 27){
        alert ('Acaso eres un adulto?')
}
     else if(x >= 19){
         alert('Acaso eres joven?')
     }
    
else if(x >= 12){
    alert('Acaso eres un adolescente?')
}


else if (x >= 6)
{
    alert('Acaso eres un niño?')
}}
//Punto 4
function laburar(x){
x = prompt('Ingrese un dia de semana estimado')

if ((x == 'sabado') || (x == 'domingo')){
    alert(x + (' es fin de semana bro'))
}
else if ((x == 'lunes') || (x == 'martes') || (x == 'miercoles') || (x == 'jueves') || (x == 'viernes')){
    alert(x + ' es un dia de laburo')
}
}
//Punto 5
function contraseña(x){
    x = prompt('Ingrese una contraseña')

    if ((x == 'secreto')){
    alert('Acceso concedido')
}
else{
    alert('Acceso denegado')
}}