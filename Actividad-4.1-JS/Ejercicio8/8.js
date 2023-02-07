function ordenarNombres() {

    var nombres=[];

    var datos = document.getElementsByName("name[]");

    for (var i = 0; i < datos.length; i++) {

        nombres.push(datos[i].value);

    }

    var sort_nombres = nombres.sort();

    for (var i = 0; i < sort_nombres.length; i++)  {

        if (document.getElementById("first").innerHTML == ""){

            document.getElementById("first").innerHTML = sort_nombres[i];

        }
        else if (document.getElementById("second") .innerHTML== "") {
            document.getElementById("second").innerHTML = sort_nombres[i];
            
        }
        else if (document.getElementById("third").innerHTML == "") {
            document.getElementById("third").innerHTML = sort_nombres[i];

        }
        else if (document.getElementById("fourth").innerHTML == "") {
            document.getElementById("fourth").innerHTML = sort_nombres[i];

        }
        else if (document.getElementById("last").innerHTML == "") {
            document.getElementById("last").innerHTML = sort_nombres[i];

        }
    }




        

}
    
