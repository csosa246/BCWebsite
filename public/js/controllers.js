'use strict';
/* View-Controllers */
//-------------------------------------------------------------------------------//
//Home View Controller (executesOnStart)
//-------------------------------------------------------------------------------//
function HomeViewController($scope) {
    $('.nav li').siblings('li').removeClass('active');
    $('#homeButton').addClass('active');
}
//-------------------------------------------------------------------------------//
//Work View Controller (executesOnStart)
//-------------------------------------------------------------------------------//
function WorkViewController($scope) {
    $('.nav li').siblings('li').removeClass('active');
    $('#workButton').addClass('active');
}
//-------------------------------------------------------------------------------//
//Music View Controller (executesOnStart)
//-------------------------------------------------------------------------------//
function MusicViewController($scope) {
    $('.nav li').siblings('li').removeClass('active');
    $('#musicButton').addClass('active');
}
//-------------------------------------------------------------------------------//
//Design View Controller (executesOnStart)
//-------------------------------------------------------------------------------//
function DesignViewController($scope) {
    $('.nav li').siblings('li').removeClass('active');
    $('#designButton').addClass('active');
}

//-------------------------------------------------------------------------------//
//Work View Controller Functions 
//-------------------------------------------------------------------------------//
function WorkItems($scope, $http, mySharedService) {
    $scope.posts = [];
    $http({method: 'GET', url: '/api/work'}).
        success(function (data, status, headers, config) {
            $scope.posts = data.posts;
        });

    $scope.seeMoreButtonWasClicked = function (msg) {
        mySharedService.prepForBroadcast(msg);
    };

    $scope.$on('handleBroadcast', function () {
        $scope.message = mySharedService.message;
    });
};

function WorkItemsCarousel($scope, $http, mySharedService) {
    $scope.slides = [];
    $scope.getCarouselSlides = function (index) {
        $scope.slides = [];
        $http({method: 'GET', url: '/api/workgallery/' + index}).
            success(function (data, status, headers, config) {
                for (var i = 0; i < data.post.length; i++) {
                    $scope.slides.push({
                        image: data.post[i]
                    });
                }
            });
    }

    $scope.$on('handleBroadcast', function () {
        $scope.message = mySharedService.message;
        $scope.getCarouselSlides($scope.message);
    });
}
//-------------------------------------------------------------------------------//
//Music View Controller Functions
//-------------------------------------------------------------------------------//
function SoundCloudController($scope, $http) {
    $scope.tracks = [];
    $http({method: 'GET', url: '/api/music'}).
        success(function (data, status, headers, config) {
            $scope.tracks = data.tracks;
        });
}
//-------------------------------------------------------------------------------//
//Design View Controller Functions
//-------------------------------------------------------------------------------//
function DesignItems($scope, $http, mySharedService) {
    $scope.posts = [];
    $http({method: 'GET', url: '/api/design'}).
        success(function (data, status, headers, config) {
            $scope.posts = data.posts;
        });

    $scope.seeMoreButtonWasClicked = function (msg) {
        mySharedService.prepForBroadcast(msg);
    };

    $scope.$on('handleBroadcast', function () {
        $scope.message = mySharedService.message;
    });
};

function DesignItemsCarousel($scope, $http, mySharedService) {
    $scope.slides = [];
    $scope.getCarouselSlides = function (index) {
        $scope.slides = [];
        $http({method: 'GET', url: '/api/designgallery/' + index}).
            success(function (data, status, headers, config) {
                for (var i = 0; i < data.post.length; i++) {
                    $scope.slides.push({
                        image: data.post[i]
                    });
                }
            });
    }

    $scope.$on('handleBroadcast', function () {
        $scope.message = mySharedService.message;
        $scope.getCarouselSlides($scope.message);
    });
}

//-------------------------------------------------------------------------------//
//Modal-Message Controller Functions
//-------------------------------------------------------------------------------//
function ModalDemoCtrl($scope,$http) {

    $scope.sender = ""; 
    $scope.message = "";


    $scope.open = function () {
        $scope.shouldBeOpen = true;
    };

    $scope.close = function () {
        $scope.closeMsg = 'I was closed at: ' + new Date();
        $scope.shouldBeOpen = false;
    };

    $scope.send = function () {

        var sender = $scope.contact.sender; 
        var message = $scope.contact.message;

        $http.post('/api/contact', {
            name: sender,
            message: message
        }).
        success(function(data, status, headers, config) {
            //$location.path('/readPost/' + $routeParams.id);
            alert('message sent');
        });
    };

    $scope.opts = {
        backdropFade: true,
        dialogFade: true
    };

};

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
