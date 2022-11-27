//creacion de variables
let nombre = prompt ("Ingrese su nombre");

if(nombre === ""){
    alert("ingrese un nombre valido");

}else{
    let accion = prompt (`Hola ${nombre} selecciona una accion: 
    1: Suma
    2: resta
    3: multiplicacion
    4: divicion`);

    switch (accion) {
        case "1":
            let num1_suma = parseInt (prompt("ingrese el primer numero"));
            let num2_suma = parseInt (prompt("ingrese el segundo numero"));
            let resultado_suma = num1_suma + num2_suma;
    
            alert("El resultado de la suma es: " +  resultado_suma);
    
        break
        case "2":
            let num1_resta = parseInt (prompt("ingrese el primer numero"));
            let num2_resta = parseInt (prompt("ingrese el segundo numero"));
            let resultado_resta = num1_resta - num2_resta;
    
            alert("El resultado de la resta es: " +  resultado_resta);
        break
        case "3":
            let num1_mul = parseInt (prompt("ingrese el primer numero"));
            let num2_mul = parseInt (prompt("ingrese el segundo numero"));
            let resultado_mul = (num1_mul * num2_mul);
    
            alert("El resultado de la multiplicacion es: " +  resultado_mul);
        break
        case "4":
            let num1_div = parseInt (prompt("ingrese el primer numero"));
            let num2_div = parseInt (prompt("ingrese el segundo numero"));
            let resultado_div = num1_div / num2_div;
    
            alert("El resultado de la divicion es: " +  resultado_div);
        break
        default:
            alert("por favor seleccione una opcion de la lista");
            
        break;
            
    }
    
}



