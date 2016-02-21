sap.ui.define(["sap/ui/core/util/MockServer"],
function(MockServer){

  return {


    init : function(sService) {

      oMockServer = new MockServer({
        rootUri : "some/service/uri"
      });
      sService = jQuery.sap.getModulePath("ui5/dev/localService/" + sService +  "/metadata", ".xml")
      //sService = "/localService/" + sService + "/metadata.xml";
      oMockServer.simulate(sService, {
        bGenerateMissingMockData : true
      });

      oMockServer.start();
    }
  }
})
