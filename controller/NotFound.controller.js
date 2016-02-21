sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  function(Controller){

  return Controller.extend("ui5.dev.controller.NotFound", {

    init : function(){

    },

    onNavBack : function() {
      window.history.go(-1);
    }

  })
})
