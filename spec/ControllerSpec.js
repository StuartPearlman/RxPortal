describe('RxPortalController', function() {

    var $scope, ctrl;

    beforeEach(function() {

        module('rxPortal');

        inject(function($rootScope, $controller) {

            $scope = $rootScope.$new();

            ctrl = $controller('RxPortalController', {

                $scope: $scope,
            });
        });
    });

    describe('Initialization', function() {


        it('should start with the user logged out', function() {

            expect(ctrl.logged_in).toEqual(false);
        });

        it('should start with the login partial closed', function() {

            expect(ctrl.loginPartial).toEqual(false);
        });

        it('should start with an empty user object', function() {

            expect(ctrl.user).toEqual({});
        });
    });

    describe('Session', function() {

        it("should read values from $scope", function() {
            
            $scope.email = ''; 
            $scope.password = '';
            
            ctrl.login();
            
            expect($scope.email).toBeFalsy();
        });

        it("should log the user in and close the login partial", function() {
            
            $scope.email = 'fake@fake.com';
            $scope.password= 'banana';
            
            ctrl.login();
            
            expect(ctrl.logged_in).toBeTruthy();
            expect(ctrl.loginPartial).toBeFalsy();
        }); 
    });

    describe('Login Partial', function() {

        it("'openLoginPartial()' should set controller's loginPartial attribute to true", function() {
            
            ctrl.openLoginPartial();
            
            expect(ctrl.loginPartial).toBeTruthy();
        }); 

        it("'cancelLoginPartial()' should set controller's loginPartial attribute to false", function() {
            
            ctrl.cancelLoginPartial();
            
            expect(ctrl.loginPartial).toBeFalsy();
        });
    });
});

describe('ProfileController', function() {

    var $scope, ctrl;

    beforeEach(function() {

        module('profile');

        inject(function($rootScope, $controller) {

            $scope = $rootScope.$new();

            ctrl = $controller('ProfileController', {

                $scope: $scope,
            });
        });
    });

    describe('Initialization', function() {


        it('should start with the user logged out', function() {

            expect(ctrl.logged_in).toEqual(false);
        });

        it('should start with the prescription partial closed', function() {

            expect(ctrl.prescriptionPartial).toEqual(false);
        });

        it('should start with an empty prescription array', function() {

            expect(ctrl.allPrescriptions).toEqual([]);
        });
    });

    describe('addPrescription()', function() {

        it("should add a timestamp to each prescription", function() {
            
            $scope.prescription = {"type": "Glasses"}; 
            
            ctrl.addPrescription();
            
            expect(ctrl.allPrescriptions[0].createdOn).toBeDefined();
        });

        it("should clear the prescription form and close the prescription partial", function() {
            
            $scope.prescription = {"type": "Glasses"}; 
            
            ctrl.addPrescription();
            
            expect($scope.prescription).toEqual({});
            expect(ctrl.prescriptionPartial).toBeFalsy();
        }); 
    });

    describe('Prescription Partial', function() {

        it("'openPrescriptionPartial()' should set controller's prescriptionPartial attribute to true and default to 'type' = 'Glasses'", function() {
            
            ctrl.openPrescriptionPartial();
            
            expect(ctrl.prescriptionPartial).toBeTruthy();
            expect($scope.prescription).toEqual({"type": "Glasses"});
        }); 

        it("'cancelPrescriptionPartial()' should set controller's prescriptionPartial attribute to false", function() {
            
            ctrl.cancelPrescriptionPartial();
            
            expect(ctrl.prescriptionPartial).toBeFalsy();
        });
    });
});