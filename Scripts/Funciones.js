var cadena="";
var cadena2="";
var operacion="";
var numeroUno, numeroDos;
function concatenar(numero){
	cadena+=numero;
	document.Calculadora.Vista.value = parseInt(cadena).toString(2);
	
	}


function CapturarOperacion(op){
	operacion=op;
	document.Calculadora.Dato1.value = parseInt(cadena).toString(2)+operacion;
	document.Calculadora.Vista.value ="";
	cadena2=cadena;
	cadena="";
}

function Borrar(){
		cadena="";
		cadena2="";
		document.Calculadora.Vista.value ="";
		document.Calculadora.Dato1.value ="";
}


function Operar(){
	
	if (operacion =='+') {
			var resultado=parseInt(cadena2)+parseInt(cadena);
			document.Calculadora.Vista.value = resultado.toString(2);
		}else if (operacion=='-') {
			var resultado=parseInt(cadena2)-parseInt(cadena);
			document.Calculadora.Vista.value = resultado.toString(2);
		}else if(operacion=='*'){
			var resultado=parseInt(cadena2)*parseInt(cadena);
			document.Calculadora.Vista.value = resultado.toString(2);
		}else if(operacion=='/'){
			var resultado=parseInt(cadena2)/parseInt(cadena);
			document.Calculadora.Vista.value = resultado.toString(2);
		}
		
	
}
	                                                                           