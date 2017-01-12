sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json//JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {
		
		onInit : function () {
			// 			var oData = {
			// 				name: "Hello World"
			// };
			
			//  var oModel = new JSONModel(oData);		//instanziamo il nuovo modello di dati del controller
			//  this.getView().setModel(oModel);		//assegniamo il modello globalmente
		
		 // // set i18n model on view
   //      var i18nModel = new ResourceModel({
   //         bundleName: "sap.ui.demo.wt.i18n.i18n"
   //      });
   //      this.getView().setModel(i18nModel, "i18n");
         
		}
	});

});