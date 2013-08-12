'use strict';

/* Controllers */


function HomeViewController($scope){
        $('.nav li').siblings('li').removeClass('active');
        $('#homeButton').addClass('active');
}

function WorkViewController($scope){
        $('.nav li').siblings('li').removeClass('active');
        $('#workButton').addClass('active');
}

function MusicViewController($scope){
        $('.nav li').siblings('li').removeClass('active');
        $('#musicButton').addClass('active');
}


function WorkItems($scope,$http,mySharedService) {
  $scope.posts = [];

  $http({method: 'GET', url: '/api/work'}).
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;


  });

  $scope.seeMoreButtonWasClicked = function(msg) {
    //alert(JSON.stringify($scope.posts[$index]));
    mySharedService.prepForBroadcast(msg);
  };

  $scope.$on('handleBroadcast',function(){
    $scope.message = mySharedService.message;
  });
};

function CarouselDemoCtrl($scope,$http,mySharedService) {
  $scope.slides = [];
  $scope.getCarouselSlides = function(index){
  $scope.slides = [];
  $http({method: 'GET', url: '/api/workgallery/'+index}).
    success(function(data, status, headers, config) {
      for(var i = 0; i<data.post.length;i++){
        $scope.slides.push({
          image: data.post[i]
        });
      }
  });


  }

  $scope.$on('handleBroadcast',function(){
    $scope.message = mySharedService.message;
    $scope.getCarouselSlides($scope.message);
  });
}


//Music 
function SoundCloudController($scope,$http) {
  $scope.tracks = [];
  $http({method: 'GET', url: '/api/music'}).
    success(function(data, status, headers, config) {
      $scope.tracks = data.tracks;
  });
}


function ModalDemoCtrl($scope) {

  $scope.open = function () {
    $scope.shouldBeOpen = true;
  };

  $scope.close = function () {
    $scope.closeMsg = 'I was closed at: ' + new Date();
    $scope.shouldBeOpen = false;
  };

  $scope.send = function () {
    alert('clicked the send button');
    //should call close after send 
  };

  $scope.items = ['item1', 'item2'];

  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

};

// var imageControl = function ($scope){
//   $scope.numbers = [1,2,3,4,5];
//   $scope.$watch('filteredNumbers');
// }

// function TodoCtrl($scope) {
//   $scope.todos = [
//     {text:'learn angular', done:true},
//     {text:'build an angular app', done:false}];
 
//   $scope.addTodo = function() {
//     $scope.todos.push({text:$scope.todoText, done:false});
//     $scope.todoText = '';
//   };
 
//   $scope.remaining = function() {
//     var count = 0;
//     angular.forEach($scope.todos, function(todo) {
//       count += todo.done ? 0 : 1;
//     });
//     return count;
//   };
 
//   $scope.archive = function() {
//     var oldTodos = $scope.todos;
//     $scope.todos = [];
//     angular.forEach(oldTodos, function(todo) {
//       if (!todo.done) $scope.todos.push(todo);
//     });
//   };
// }

//
// function AddPostCtrl($scope, $http, $location) {
//   $scope.submitPost = function () {
//     $http.post('/api/addPost', {
//       title: $scope.title,
//       text: $scope.text
//     }).
//     success(function(data, status, headers, config) {
//       $location.path('/');
//     });
//   };
// }

// function ReadPostCtrl($scope, $http, $routeParams) {
//   $http({method: 'GET', url: '/api/post/' + $routeParams.id}).
//     success(function(data, status, headers, config) {
//       $scope.post = data.post;
//     });
// }

// function EditPostCtrl($scope, $http, $location, $routeParams) {
//   $http({method: 'GET', url: '/api/post/' + $routeParams.id}).
//     success(function(data, status, headers, config) {
//       $scope.title = data.post.title;
//       $scope.text = data.post.text;
//     });

//   $scope.editPost = function () {
//     $http.post('/api/editPost', {
//       id: $routeParams.id,
//       title: $scope.title,
//       text: $scope.text
//     }).
//     success(function(data, status, headers, config) {
//       $location.path('/readPost/' + $routeParams.id);
//     });
//   };
// }

// function DeletePostCtrl($scope, $http, $location, $routeParams) {
//   $http({method: 'GET', url: '/api/post/' + $routeParams.id}).
//     success(function(data, status, headers, config) {
//       $scope.post = data.post;
//     });

//   $scope.deletePost = function () {
//     $http.post('/api/deletePost', {
//       id: $routeParams.id
//     }).
//     success(function(data, status, headers, config) {
//       $location.path('/');
//     });
//   };

//   $scope.home = function () {
//     $location.path('/');
//   };
// }
