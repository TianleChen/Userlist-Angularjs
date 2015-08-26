/*Set up module*/
var myApp = angular.module('myApp', ['ngRoute']);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Set up data factory*/
myApp.factory('Userdata', function () {
  var users = [
    {id:1, fName:'Hege',lName:"Pege", Sex:'Male', Age:'25' },
    {id:2, fName:'Kim',lName:"Pim", Sex:'Male', Age:'33' },
    {id:3, fName:'Sal',lName:"Smith", Sex:'Male', Age:'40' },
    {id:4, fName:'Jack',lName:"Jones", Sex:'Male', Age:'28' },
    {id:5, fName:'John',lName:"Doe", Sex:'Male', Age:'44' },
    {id:6, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:7, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:8, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:9, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:10, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:11, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:12, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:13, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:14, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' },
    {id:15, fName:'Peter',lName:"Pan", Sex:'Male', Age:'37' }
    ];
    users.getUser = function () {
      return users;
    }
    return users;
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Set up userlist controller*/
myApp.controller('userlistCtrl', function($scope, $location, Userdata) {
$scope.users = Userdata;
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
  var i;
  $scope.users.splice(id - 1, 1);
  for (i = id - 1; i < $scope.users.length; i++) {
    $scope.users[i].id--;
  };
};

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

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Set up newuser controller*/
myApp.controller('NewUserCtrl', function($scope,$location, Userdata) {
$scope.users = Userdata;
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
}

$scope.addUser = function () {
  var newUser = {id: $scope.users.length + 1, fName: $scope.fName, lName: $scope.lName, Sex: $scope.Sex, Age: $scope.Age};
  $scope.users.push(newUser);
  $scope.fName = '';
  $scope.lName = '';
  $scope.Sex = '';
  $scope.Age = '';
  console.log(newUser);
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Set up edituser controller*/
myApp.controller('EditUserCtrl', function($scope, $location, Userdata) {
$scope.users = Userdata;
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
}

//cannot pass id parameter
var id = 1;
  $scope.fName = $scope.users[id-1].fName;
  $scope.lName = $scope.users[id-1].lName; 
  $scope.Sex = $scope.users[id-1].Sex;
  $scope.Age = $scope.users[id-1].Age;

$scope.editUser = function () {
  $scope.users[id-1].fName = $scope.fName;
  $scope.users[id-1].lName = $scope.lName;
  $scope.users[id-1].Sex = $scope.Sex;
  $scope.users[id-1].Age = $scope.Age;
  console.log($scope.users[id-1]);
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Set up router*/
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'userlist.html',
        controller: 'userlistCtrl'
      })
      .when('/CreateNewUser', {
        templateUrl: 'newuser.html',
        controller: 'NewUserCtrl'
      })
      .when('/EditUser', {
        templateUrl: 'edituser.html',
        controller: 'EditUserCtrl'
      })
      .otherwise({
        templateUrl: '/'
      });
}]);