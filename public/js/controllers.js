'use strict';

/* Controllers */


function NavBarController($scope) {
    $scope.onTwitterLogin = function()
    {
        // a direct window.location to overcome Angular intercepting your call!
        window.location = "/auth/twitter";
    }

    $scope.onFacebookLogin = function () {

    }
}

function IndexCtrl($scope, $http) {
  $scope.posts = [];

  $http({method: 'GET', url: '/api/posts'}).
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;
    });
}


function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/200',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}

var ModalDemoCtrl = function ($scope) {

  $scope.open = function () {
    $scope.shouldBeOpen = true;
  };

  $scope.close = function () {
    $scope.closeMsg = 'I was closed at: ' + new Date();
    $scope.shouldBeOpen = false;
  };

  $scope.items = ['item1', 'item2'];

  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

};


// function LoginCtrl($scope,$location)
// {
//     $scope.onLoginClick = function()
//     {
//         // a direct window.location to overcome Angular intercepting your call!
//         window.location = "/auth/twitter";
//     }
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
