/*Set up newuser controller*/
myApp.controller('NewUserCtrl', function($scope,$location, Userdata) {
$scope.fName = '';
$scope.lName = '';
$scope.Sex ='';
$scope.Age ='';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.error = false;
$scope.incomplete = false; 

$scope.gohome = function (path) {
  $location.path(path);
};

$scope.addUser = function () {
  Userdata.addUser($scope.fName, $scope.lName, $scope.Sex, $scope.Age);
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