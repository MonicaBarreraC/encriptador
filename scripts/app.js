var option = prompt("Ingrese 'E' para encriptar y 'D' para desencriptar");

var texto = prompt("Ingrese el texto aquí: ");
imprimir(" Texto: " + texto);

if (option == "E" ){

	var textoEncriptado = encriptarTexto(texto);
	imprimir(" Encriptado: " + textoEncriptado);
}

else if (option == "D"){

	var textoDesencriptado = desencriptarTexto(texto);
	imprimir(" Desencriptado: " + textoDesencriptado);
}

else {
	imprimir(" No se pudo proceder con el programa.");
}
	

function encriptarTexto(texto){
	var encriptado = "";

	for (var i = 0; i < texto.length; i++) {
		if (texto[i] == "a"){
			encriptado = encriptado + "ai";
		}
		else if (texto[i] == "e"){
			encriptado = encriptado + "enter";
		}
		else if (texto[i] == "i"){
			encriptado = encriptado + "imes";
		}
		else if (texto[i] == "o"){
			encriptado = encriptado + "ober";
		}
		else if (texto[i] == "u"){
			encriptado = encriptado + "ufat";
		}
		else {
			encriptado = encriptado + texto[i];
		}
	}
	return encriptado;
}

function desencriptarTexto(texto) {
	var desencriptado = "";

	for (var i = 0; i < texto.length; i++){
		console.log("texto[i]: " + texto[i]);
		console.log("i: " + i);

		// Sustituir "ai" por "a"
		if(texto[i] == "a" && texto[i + 1] == "i"){
			desencriptado = desencriptado + "a";
			i += 1;
		}

		// Sustituir "enter" por "e"
		else if(texto[i] == "e" && texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r"){
			desencriptado = desencriptado + "e";
			i += 4;
		}

		// Sustituir "imes" por "i"
		else if(texto[i] == "i" && texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s"){
			desencriptado = desencriptado + "i";
			i += 3;
		}

		// Sustituir "ober" por "o"
		else if(texto[i] == "o" && texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r"){
			desencriptado = desencriptado + "o";
			i += 3;
		}

		// Sustituir "ufat" por "u"
		else if(texto[i] == "u" && texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t"){
			desencriptado = desencriptado + "u";
			i += 3;
		}

		// Directamente agregarlo
		else {
			desencriptado = desencriptado + texto[i];
		}
	}

	return desencriptado;
}

function imprimir(frase) {
	document.write(frase)
	document.write("<br>")
}