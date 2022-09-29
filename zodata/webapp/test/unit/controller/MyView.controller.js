/*global QUnit*/

sap.ui.define([
	"zodata/zodata/controller/MyView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyView Controller");

	QUnit.test("I should test the MyView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
