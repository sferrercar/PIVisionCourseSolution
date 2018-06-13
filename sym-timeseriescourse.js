/*
COURSE 
CUSTOM SYMBOL DEVELOPED BY SERGIO FERRER
2018-06-07
UNSBV - UNITED NATIONS SUPPORT BASE VALENCIA
*/


(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);
		
	var definition = { 
		typeName: "timeseriescourse",
		displayName: 'Time Series Customizing Course',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		iconUrl: '/Scripts/app/editor/symbols/ext/Icons/timeSeriesDataTable.png',
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Timeseries',
				Height: 100,
				Width: 400 ,
				//Configurable options
				showTitleName: true,
				showTitleUnits: true,	
				showTimestampCheckboxValue: true,
				BackgroundColor: "#cdd0db",
				BorderRadius: 5,
				DisplayDigits: 2,				
				BorderColor: "#808080",
				HeaderBackgroundColor: "#5258a7",
				HeaderTextColor: "#ffffff",
			} 
		},
		configOptions: function(){
			return [
				{
					title: "Format Symbol",
					mode: "format"
				}
			];
		}
	}
	
	symbolVis.prototype.init = function(scope, elem) {
		
		this.onDataUpdate = dataUpdate;
		this.onConfigChange = myCustomConfigurationChangeFunction;
		
		/*ASSIGN DIFFERENT ID TO THE CUSTOM SYMBOL*/
		var container = elem.find('#container')[0];
        var ID = "myCustomSymbol_" + Math.random().toString(36).substr(2, 16);
        container.id = ID;
		
		function dataUpdate(data){
			
			if (!data) return;
			//console.log(data);
			var firstAttribute = data.Data[0];
			scope.Values = firstAttribute.Values;
			
			if(firstAttribute.Label)
			{
				//sporadic update (each 5 mins)
				scope.Units=firstAttribute.Units;
				scope.Label=firstAttribute.Label;
			}
		}
		
		//************************************
		// Function that is called when custom configuration changes are made
		//************************************
		function myCustomConfigurationChangeFunction(data) {	
			//console.log(data);
		}
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
