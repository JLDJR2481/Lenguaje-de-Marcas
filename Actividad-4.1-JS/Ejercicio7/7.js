function conversor() {

    var valor = prompt("Introduce un valor numérico para convertir con el simbolo correspondiente (€/$)");

    var divisa = valor.slice(-1);

    document.getElementById("input").innerHTML = "Se ha introducido " + valor;

    var longitud = (valor.length) - 1;

    var dinero = valor.slice(0, longitud);

    if (divisa == "€") {

        document.getElementById("divisa_a_cambiar").innerHTML = "Se han introducido " + divisa + ". Se cambiarán a Dólares ($)";

        var cambio = Number(dinero) * 1.10;
        document.getElementById("resultado").innerHTML = "El cambio aproximado de "+ valor + " es: " + cambio + "$";
    }

    else if (divisa == "$") {

        document.getElementById("divisa_a_cambiar").innerHTML = "Se han introducido " + divisa + ". Se cambiarán a Euros (€)";

        var cambio = Number(dinero) * 0.91;
        document.getElementById("resultado").innerHTML = "El cambio aproximado de " + valor + " es: " + cambio + "€";
    }
    else {
        document.getElementById("resultado").innerHTML = "Error. Recarga la página y prueba otra vez";
    }

}