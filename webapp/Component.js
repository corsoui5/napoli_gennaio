/*sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "sap/ui/Device",
	"sap/ui/demo/wt/model/models" 
], function (UIComponent, JSONModel, ResourceModel, Device, models) {
   "use strict";
   
   return UIComponent.extend("sap.ui.demo.wt.Component", {
            metadata : {
		rootView: "sap.ui.demo.wt.view.App"
	},
	
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         	
			
         var oData = {
            name: "Hello World Odata"
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set i18n model
         var i18nModel = new ResourceModel({
            bundleName : "sap.ui.demo.wt.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
         
 // set the device model
			this.setModel(models.createDeviceModel(), "device");
         
      }
   });
});*/

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/demo/wt/model/models",
	 "sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.wt.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			    var oData = {
            name: "Hello World Odata"
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
         
		}
	});
}); 
