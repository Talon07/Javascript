function inicioCalcu() {
  const nombre = prompt("Ingresa tu nombre");
  const anioNac = parseInt(prompt("Ingresa tu año de nacimiento"));
  const edad = 2023 - anioNac;
  alert("Hola " + nombre + " tenes " + edad + " años.");
  if (edad < 18) {
    alert("no podes avanzar");
  } else {
    alert("Bienvenido/a " + nombre + " puedes usar nuestra calculadora.");

    function sumar(valor1, valor2) {
      const resultado = valor1 + valor2;
      return resultado;
    }

    function restar(valor1, valor2) {
      const resultado = valor1 - valor2;
      return resultado;
    }

    function dividir(valor1, valor2) {
      const resultado = valor1 / valor2;
      return resultado;
    }

    function multiplicar(valor1, valor2) {
      const resultado = valor1 * valor2;
      return resultado;
    }

    function calculadora() {
      const valor1 = parseInt(prompt("Ingrese el primer valor"));
      const operacion = prompt(
        "¿Que operacion desea realizar? \n 1)Suma \n 2)Resta \n 3)Multiplicacion \n 4)Division"
      );
      const valor2 = parseInt(prompt("Ingrese el segundo valor"));

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
