angular.module('utils_Factory', [])

.factory('UtilsFactory', function() {
	var user = {};
	return {
	    setUser: function (data) {
			user = data;
	  	},
	      
	  	getUser: function () {
	  		return user;
	    }	  	
	}
});