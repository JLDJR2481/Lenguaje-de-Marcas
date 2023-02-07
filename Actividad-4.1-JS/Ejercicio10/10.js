function calcularMedia() {

    var n = document.getElementById("nombre");

    var nombre = n.value;

    var primera_nota = document.getElementById("primera_nota");

    var valor_primera_nota = Number(primera_nota.value);

    var segunda_nota = document.getElementById("segunda_nota");

    var valor_segunda_nota = Number(segunda_nota.value);

    var tercera_nota = document.getElementById("tercera_nota");

    var valor_tercera_nota = Number(tercera_nota.value);

    var media = (valor_primera_nota + valor_segunda_nota + valor_tercera_nota)/3;

    document.getElementById("media").innerHTML = ("Aquí tienes tu media "+ nombre +": " + media.toFixed());
}