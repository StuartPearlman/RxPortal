(function() {

    //Initialize app
    var app = angular.module('profile', []);

    //Define controller and inject dependencies
    app.controller('ProfileController', ['$scope', function($scope) {

    	var profile = this //maintain scope within functions

        this.logged_in = false; //not logged in initially

        this.prescriptionPartial = false; //prescription partial hidden

        this.allPrescriptions = []; //empty array to hold prescriptions

        this.addPrescription = function() {
        	
            $scope.prescription.createdOn = Date.now(); //add timestamp to prescription
        	
            profile.allPrescriptions.push($scope.prescription); //add prescription from form to array
        	
            $scope.prescription = {}; //clear form
        	
            profile.prescriptionPartial = false; //close partial
        };

        this.openPrescriptionPartial = function() {
        	
            profile.prescriptionPartial = true; //open partial
        	
            $scope.prescription = {"type": "Glasses"}; //default "type" to "Glasses"
        }; 

        this.cancelPrescriptionPartial = function() {
        	
            profile.prescriptionPartial = false; //close partial
        	
            $scope.prescription = {}; //clear form
        };

        $scope.$on('LoggedIn', function() {

            profile.logged_in = true; //log user in on this controller too
        });

    }]);

    app.directive('profilePage', function() {
        
        return {
            restrict: 'E',
            templateUrl: 'templates/profile/profile-page.html'
        };
    });

    app.directive('prescriptionList', function() {
        
        return {
            restrict: 'E',
            templateUrl: 'templates/profile/prescription-list.html'
        };
    });

    app.directive('prescriptionForm', function() {
        
        return {
            restrict: 'E',
            templateUrl: 'templates/profile/prescription-form.html'
        };
    });

})();