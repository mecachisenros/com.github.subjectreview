(function(angular, $, _) {
	// crmSubjectReview factory
	angular.module('crmMailSubjectReview').factory('crmSubjectReviewFactory', function(){
		return {
			editEnabled: false,
			enableEdit: function() {
  			this.editEnabled = true;
			},
			disableEdit: function() {
  			this.editEnabled = false;
			}
		}
	});
})(angular, CRM.$, CRM._);