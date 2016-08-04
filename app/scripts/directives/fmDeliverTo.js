'use strict';

foodMeApp.directive('fmDeliverTo', function() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/directives/fmDeliverTo.html',
    scope: {},
    controller: function FmDeliverToController($scope, customer) {
      $scope.customer = customer;
    }
  };
});
