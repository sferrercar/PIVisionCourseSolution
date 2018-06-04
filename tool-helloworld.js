(function (PV){
	"use strict";

	var def = {
		typeName: "helloworld", 
		init: init 
	} 

	function init(scope) {
		scope.buttonClicked = function(){			
			alert("Hello world");
		}
	}

	PV.toolCatalog.register(def); 

})(window.PIVisualization)
