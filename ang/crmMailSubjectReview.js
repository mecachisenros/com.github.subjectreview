(function(angular, $, _) {
  // Declare a list of dependencies.
  angular.module('crmMailSubjectReview', [
		'crmUi', 'crmUtil', 'ngRoute'
  ]);

  // Hook into crmMailing module and append directive into crmMailingBlockReview directive
	angular.module( 'crmMailing' ).config( function( $provide ){
		$provide.decorator( 'crmMailingBlockReviewDirective', function( $delegate ){
			var directive = $delegate[0];
			var link = directive.link;
			directive.compile = function( Element, Attrs ){
				Element.children( ":first" ).children( ":first" ).children( ":first" ).children( ":nth-child(2)" ).after( '<div crm-subject-review></div>' );
				return function( scope, elem, attr ){
					link.apply( this, arguments );
				};
			};
			return $delegate;
		});
	});

})(angular, CRM.$, CRM._);
