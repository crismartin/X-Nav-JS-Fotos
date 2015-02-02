function array_fotos (id){
	var lista = document.getElementById(id).getElementsByTagName("li");	
	var imagenes = [];

	for (i = 0; i < lista.length; i++){
		imagenes.push (lista[i].innerHTML);
	}	

	return imagenes;
}		
			
function insertar (id, fotos){
	var elemento = document.getElementById(id);
	var fotos = array_fotos(fotos);	
	var num_aleat = Math.round(Math.random()*(fotos.length-1));	
	elemento.innerHTML = '<img src = "' + fotos[num_aleat] + '">';	
};
