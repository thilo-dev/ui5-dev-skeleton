sap.ui.define([
        'sap/ui/core/UIComponent',
        'sap/m/routing/Router',
        'sap/ui/model/json/JSONModel',
        'sap/ui/Device'
    ],
    function (UIComponent, Router, JSONModel, Device) {
        "use strict";

        return UIComponent.extend("ui5.dev.Component", {

            metadata : {

                rootView : "ui5.dev.view.App",

                /* routing : {
                    config : {
                        routerClass : Router,
                        viewType : "XML",
                        viewPath : "ui5.memory.view",
                        controlId: "idAppControl"
                    },
                    routes : [
                        {
                            pattern: "",
                            name: "Home",
                            target: ["home"]
                        }
                    ],
                    targets: {
                        "home" : {
                            viewName : "Home",
                            viewLevel : 1,
                            controlAggregation : ""
                        }
                    }
                }
                */
            },

            init : function () {
                var deviceModel = new JSONModel(Device);
                deviceModel.setDefaultBindingMode("OneWay");
                this.setModel(deviceModel, "device");
                UIComponent.prototype.init.apply(this, arguments);
                // this.getRouter().initialize();
            }
        });

    }, /* bExport= */ true);