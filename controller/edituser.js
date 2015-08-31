/*Set up edituser controller*/
myApp.controller('EditUserCtrl', function($scope, $location, $routeParams, Userdata) {
$scope.user = Userdata.getUserById($routeParams.id);
$scope.fName = $scope.user.fName;
$scope.lName = $scope.user.lName; 
$scope.Sex = $scope.user.Sex;
$scope.Age = $scope.user.Age;
$scope.passw1 = '';
$scope.passw2 = '';
$scope.error = false;
$scope.incomplete = false; 

$scope.gohome = function (path) {
  $location.path(path);
};

$scope.editUser = function () {
  Userdata.editUser($routeParams.id, $scope.fName, $scope.lName, $scope.Sex, $scope.Age);
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName',function() {$scope.test();});
$scope.$watch('lName',function() {$scope.test();});
$scope.$watch('Sex',function() {$scope.test();});
$scope.$watch('Age',function() {$scope.test();});

$scope.test = function() {
if ($scope.passw1 !== $scope.passw2) {
  $scope.error = true;
  } else {
  $scope.error = false;
  }
  $scope.incomplete = false;
  if (!$scope.fName.length ||
  !$scope.lName.length || !$scope.Sex.length || !$scope.Age.length ||
  !$scope.passw1.length || !$scope.passw2.length) {
    $scope.incomplete = true;
  }
};
});