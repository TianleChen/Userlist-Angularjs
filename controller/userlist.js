/*Set up userlist controller*/
myApp.controller('userlistCtrl', function($scope, $location, Userdata) {
$scope.users = Userdata.getUserlist();
$scope.limit = 7;
$scope.page = 1;
$scope.orderkey = "lName";

$scope.gohome = function (path) {
  $location.path(path);
}

$scope.setOrder = function (orderkey) {
  $scope.orderkey = orderkey;
}

$scope.del = function (id) {
  Userdata.del(id);
}

$scope.prev = function () {
  if ($scope.page != 1) {
    $scope.page--;
    console.log($scope.page);
  };
};

$scope.next = function () {
  if ($scope.page != Math.ceil($scope.users.length / $scope.limit)) {
    $scope.page++;
    console.log($scope.page);
  };
};

});
