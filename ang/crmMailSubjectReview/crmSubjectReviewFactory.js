(function(angular, $, _) {
	// crmSubjectReview factory
	angular.module('crmMailSubjectReview').factory('crmSubjectReviewFactory', function(){
		return {
			edit: false,
			toggleEdit: function() {
  				this.edit = !this.edit;
			}
		}
	});
})(angular, CRM.$, CRM._);
