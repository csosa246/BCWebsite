'use strict';
/* View-Controllers */
//-------------------------------------------------------------------------------//
//Index Controller (executesOnStart)
//-------------------------------------------------------------------------------//
function IndexController($scope,$http) {
// $("div").hide();

// $(document).ready(function(){
//     $("div").find("img").load(function(){
//         $("div").show();
//     });
// });
}

//-------------------------------------------------------------------------------//
//Contact View Controller Functions
//-------------------------------------------------------------------------------//
function ContactController($scope, $http) {
    $scope.sender = "";
    $scope.message = "";
    $scope.open = function ($scope) {
        $('#modalwerd').modal('toggle');
        $('#loading-gif').hide();
    };
    //Send to email
    $scope.send = function () {
        $('#loading-gif').show();
        var sender = $scope.contact.sender;
        var message = $scope.contact.message;
        $http.post('/api/contact', {
            name: sender,
            message: message
        }).
            success(function (data, status, headers, config) {
                $scope.contact.sender = "";
                $scope.contact.message = "";
                $('#loading-gif').hide();
                $('#modalwerd').modal('toggle');
            });
    };
};