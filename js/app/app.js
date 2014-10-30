(function() {
    
    //Initialize app
    var app = angular.module('rxPortal', ['profile']);

    //Define controller and inject dependencies
    app.controller('RxPortalController', ['$scope', '$rootScope', '$window', function($scope, $rootScope, $window) {

        var rxPortal = this; //maintain scope within functions

        this.logged_in = false; //not logged in

        this.loginPartial = false; //partial not loaded

        this.user = {}; //empty user object

        this.login = function() {

            rxPortal.user = {
                email: $scope.email,
                password: $scope.password
            }; //set user object

            $scope.email = ''; //clear fields
            $scope.password = '';

            rxPortal.logged_in = true; 
            rxPortal.loginPartial = false; //close login partial
            $rootScope.$broadcast('LoggedIn'); //tell profile controller to log in user as well
        };

        this.logout = function() {
            
            $window.location.href = '/'; //reinitialize root controller to clear nested scopes
        };

        this.openLoginPartial = function() {

            rxPortal.loginPartial = true; //boolean to control login partial view
        };

        this.cancelLoginPartial = function() {

            rxPortal.loginPartial = false;
        };

    }]);

    app.directive('heading', function() {
        
        return {
            restrict: 'E',
            templateUrl: 'templates/homepage/heading.html'
        };
    });

    app.directive('login', function() {
        
        return {
            restrict: 'E',
            templateUrl: 'templates/homepage/login.html'
        };
    });

    app.directive('benefits', function() {
        
        return {
            restrict: 'E',
            templateUrl: 'templates/homepage/benefits.html'
        };
    });

    app.directive('footerSection', function() {
        
        return {
            restrict: 'E',
            templateUrl: 'templates/homepage/footer-section.html'
        };
    });

})();