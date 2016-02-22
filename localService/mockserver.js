sap.ui.define(["sap/ui/core/util/MockServer"],
function(MockServer){

  return {


    init : function(sService) {

      oMockServer = new MockServer({
        rootUri : "some/service/uri"
      });

      var sMockDataPath = "./localservice/" + sService +"/mockdata"
      sService = jQuery.sap.getModulePath("ui5/dev/localService/" + sService +  "/metadata", ".xml");
      debugger;
      //sService = "/localService/" + sService + "/metadata.xml";
      oMockServer.simulate(sService, {
        sMockdataBaseUrl : sMockDataPath,
        bGenerateMissingMockData : true
      });

      oMockServer.start();
    }
  }
})
