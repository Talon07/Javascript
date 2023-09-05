//1- Cree el contenedor de todo para poder llamarlo desde mi boton de mi hoja html.

function inicioCalcu() {
  //2- Cree las variables qu voy a utilizar para que me envien datos

  const nombre = prompt("Ingresa tu nombre");
  const anioNac = parseInt(prompt("Ingresa tu año de nacimiento"));
  const edad = 2023 - anioNac;
  alert("Hola " + nombre + " tenes " + edad + " años.");
  if (edad < 18) {
    alert("no podes avanzar");
  } else {
    alert("Bienvenido/a " + nombre + " puedes usar nuestra calculadora.");

    //3- funcion sumar de la calculadora

    function sumar(valor1, valor2) {
      const resultado = valor1 + valor2;
      return resultado;
    }

    //4- funcion restar de la calculadora

    function restar(valor1, valor2) {
      const resultado = valor1 - valor2;
      return resultado;
    }

    //5- funcion dividir de la calculadora

    function dividir(valor1, valor2) {
      const resultado = valor1 / valor2;
      return resultado;
    }

    //6- funcion multiplicar de la calculadora

    function multiplicar(valor1, valor2) {
      const resultado = valor1 * valor2;
      return resultado;
    }

    //7- Cree la calculadora con sus variables

    function calculadora() {
      const valor1 = parseInt(prompt("Ingrese el primer valor"));
      const operacion = prompt(
        "¿Que operacion desea realizar? \n 1)Suma \n 2)Resta \n 3)Multiplicacion \n 4)Division"
      );
      const valor2 = parseInt(prompt("Ingrese el segundo valor"));

      //8- creemos el switch para que la calculadora funcione

      switch (operacion) {
        case "1":
          alert("el resultado de la operacion es " + sumar(valor1, valor2));
          break;
        case "2":
          alert("el resultado de la operacion es " + restar(valor1, valor2));
          break;
        case "3":
          alert(
            "el resultado de la operacion es " + multiplicar(valor1, valor2)
          );
          break;
        case "4":
          alert("el resultado de la operacion es " + dividir(valor1, valor2));
          break;
        default:
          alert("la operacion no existe");
      }
    }

    //9- Cree el blucle para poder seguir haciendo calculos hasta que el usuario quiera

    let continuar = true;

    while (continuar) {
      calculadora();

      const respuesta = prompt(
        "¿Desea realizar otro cálculo? (Si/No)"
      ).toLowerCase();

      if (respuesta == "no" || respuesta == "n") {
        alert("¡Gracias por utilizar nuestra calculadora!");
        continuar = false;
      }
    }
  }
}
