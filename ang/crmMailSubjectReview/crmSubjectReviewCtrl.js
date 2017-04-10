(function(angular, $, _) {
	// crmSubjectReview controller
	angular.module( 'crmMailSubjectReview' ).controller( 'crmSubjectReviewCtrl', function( $scope, crmSubjectReviewFactory ){
		$scope.crmSubjectReview = crmSubjectReviewFactory;
	});
})(angular, CRM.$, CRM._);