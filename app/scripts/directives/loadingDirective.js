angular.module('appWrapService')

.directive('loading',   ['$http' ,function ($http)
{
    'use strict';
    return {
        restrict: 'A',
        link: function (scope, elm)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if(v){
                    elm.show();
                }else{
                    //elm.hide();
                    elm.remove();
                    //delete because i only want the loading screen when accessing the website not everytime a request is made
                }
            });
        }
    };

}])

.directive('tooltip', function(){
    'use strict';
    return {
        restrict: 'A',
        link: function(scope, element){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
