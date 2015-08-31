/*Set up data factory*/
myApp.service('Userdata', function () {
  var id, fName, lName, Sex, Age;
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
    this.getUserlist = function () {
      // this.getUsers();
      return users;
    };

    this.getUserById = function (id) {
      return users[id - 1];
    };

    this.del = function (id) {
      var i;
      users.splice(id - 1, 1);
      for (i = id - 1; i < users.length; i++) {
        users[i].id--;
      };
    };

    this.addUser = function (fName, lName, Sex, Age) {
      var newUser = {id: users.length + 1, fName: fName, lName: lName, Sex: Sex, Age: Age};
      users.push(newUser);
      fName = '';
      lName = '';
      Sex = '';
      Age = '';
      console.log(newUser);
    };

    this.editUser = function (id, fName, lName, Sex, Age) {
      users[id-1].fName = fName;
      users[id-1].lName = lName;
      users[id-1].Sex = Sex;
      users[id-1].Age = Age;
      console.log(users[id-1]);
    };

    // this.getUsers = function(){
    //     $http.get("http://localhost:8888/getusers", function(data){
    //         console.log(data);
    //     });
    // };
});