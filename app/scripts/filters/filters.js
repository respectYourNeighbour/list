angular.module('matchAccessLevel', []).filter('matchAccessLevel', function() {
    'use strict';
    return function( items, userAccessLevel, oneGroup ) {
       // console.log('matchAccessLevel',arguments);
        var filtered = [];
        angular.forEach(items, function(item) {
            if(oneGroup === true){
                if( userAccessLevel == item.menuLevel) {
                    filtered.push(item);
                }
            }else{
                if( userAccessLevel >= item.menuLevel) {
                    filtered.push(item);
                }
            }
        });
        return filtered;
    };
});


/*
    My filter "matchAccessLevel" -> filters all items from my ng-repeat, by userAccesLevel, and if i want to show only a certain level of menu items;
    if(oneGroup)
        if( userAccessLevel == item.menuLevel) {
            filtered.push(item);
        } -> If $scope.accessLevel == item.menuLevel return only the Menu items of that particular level;
    else
        if( userAccessLevel >= item.menuLevel) {
            filtered.push(item);
        } -> If $scope.accessLevel >= item.menuLevel return all Menu items in that range (in this case all of them);
    I do this kind of filtering to be able to show only a few items in the Menu, but when I want to search in the Menu, I want to be able to search in all the items, not only in the shown items;


    $scope.accessLevel -> Each menu level has an acces level. When I filter, I search in all Menu items on all levels. But when i click a certain Menu item I want that Menu item to show me only a certain number of Menu items of a certain level.
    $scope.onlyOneGroup = true ->
*/
