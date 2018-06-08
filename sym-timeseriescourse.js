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
				BackgroundColor: 'lightgrey',
				BorderRadius: 10,
				DisplayDigits: 2,				
				EvenRowColor: "lightgrey",
				OddRowColor: "none",
				BorderColor: "lightgrey",
				HeaderBackgroundColor: "grey",
				HeaderTextColor: "white",
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
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
