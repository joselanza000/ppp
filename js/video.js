(function(){
	'use strict';
	var check =document.getElementById('check');
	check.addEventListener('change',function(e){
		if(e.target.checked){
			alert("Gracias por ver el video");
			 
		}
		else{
			alert("Concluya con la visualizacion")
		}
	});
})();


