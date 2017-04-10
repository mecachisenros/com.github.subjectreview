(function(angular, $, _) {
  angular.module('crmMailSubjectReview').directive('crmSubjectReview', function() {
    return {
      restrict: 'AE',
      templateUrl: '~/crmMailSubjectReview/crmSubjectReview.html',
      scope: true,
      controller: 'crmSubjectReviewCtrl',
    };
  });
})(angular, CRM.$, CRM._);
