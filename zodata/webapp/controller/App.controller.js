sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("zodata.zodata.controller.App", {
        onInit() {
          // Instantiate ODATA Model
			//var oDataModel = new sap.ui.model.odata.v2.ODataModel("proxy/https/services.odata.org/Northwind/Northwind.svc/");
			var oDataModel = new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(frik5l2zde0sxh4jiifyhqo4))/OData/OData.svc/");
			// Set Model at the view level
			this.getView().setModel(oDataModel);
        }
      });
    }
  );
  