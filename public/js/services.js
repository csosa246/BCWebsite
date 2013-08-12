'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myModule = angular.module('myApp.services', []).
  value('version', '0.1');

myModule.factory('mySharedService',function($rootScope){
	var sharedService = {};
	sharedService.message = '';

	sharedService.prepForBroadcast = function(msg){
		this.message = msg;
		this.broadcastItem();
	};
	sharedService.broadcastItem = function(){
		$rootScope.$broadcast('handleBroadcast');
	}
	return sharedService;
});