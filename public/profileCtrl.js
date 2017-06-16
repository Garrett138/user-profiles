angular.module('userProfiles')
.controller('profileCtrl', function( $scope ) {

	friendsService.getFriends().then(function(response){
		$scope.currentUser = response.date.currentUser;
		$scope.friends = response.data.friends
	})

	// FIX ME - assign values to $scope.currentUser and $scope.friends
});
