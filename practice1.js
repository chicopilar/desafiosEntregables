let namesList = ['juan','pedro','javier']
function mostrarLista() {
    
    if (namesList.length == 0) {
        console.log("la lista esta vacia");
    }else {
        for (element in namesList){
            console.log('${element}');
        }
        console.log (`la lista tiene ${namesList.length} elementos`);
    }
}

mostrarLista()


