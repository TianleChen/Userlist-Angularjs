/*Set up router*/
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'view/userlist.html',
        controller: 'userlistCtrl'
      })
      .when('/CreateNewUser', {
        templateUrl: 'view/newuser.html',
        controller: 'NewUserCtrl'
      })
      .when('/EditUser/:id', {
        templateUrl: 'view/edituser.html',
        controller: 'EditUserCtrl'
      })
      .otherwise({
        templateUrl: '/'
      });
}]);