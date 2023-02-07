function texto() {

    var parrafo = document.getElementsByTagName("p");

    var header = document.getElementsByTagName("h3")


    for (i=0; i < parrafo.length; i++){
        parrafo[i].style.color = 'red';
    }
    for (i=0; i < header.length; i++){
        header[i].style.color = 'green';
    }
    
    document.getElementById("leyenda").innerHTML = ("El texto que tenga el color verde representa al h3, y el texto que tenga el color rojo representa a las p");




}