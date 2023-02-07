function concatenarStrings() {

    var dato_genero = document.getElementsByName('genero');

    for (var i = 0; i < dato_genero.length; i++) {
        if (dato_genero[i].checked == true) {
            var genero = dato_genero[i].value;
        }
    }

    var dato_deporte = document.getElementsByName('deporte');
    var deporte = dato_deporte[0].value;

    var string_juntas = "Has indicado que tu deporte y modalidad favorito es el " + deporte + " " + genero;

    document.getElementById('foot').innerHTML = string_juntas;
    
    document.getElementById('foot').className = 'footer';
    
}