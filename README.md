Basic UI5 development skeleton
==============================

This is a very simple skeleton for developing with UI5

The idea behind this is to have a quick bootstrap for all important files to test and prototype UI5 applications.

It comes with these features already built in:
*   html file with bootstrap and shell/Component initialization
*   root view with sap.m.App control plus controller
*   manifest.json with basic routing (empty pattern for Home.view.xml) and i18n initialization
*   Component.js with view model initialization

Run with MockServer
-------------------

if you want to run your experiements with a mocked OData Service you should switch to the branch mockserver.
There you will find a basic mockserver implementation and these Services prepared:
* Northwind V2 (metadata.xml with some mockdata)
* GWSample from SAP (metadata.xml only)
To use a specific service you just have to give the name the folder for your service into the mockserver init in the app.html

Some things you might want to do after forking this:
----------------------------------------------------

*   Adapt the application namespace to your needs (set to ui5.dev per default)
*   Adapt minUI5 version in the manifest to your target UI5 version

Happy Development!
------------------
