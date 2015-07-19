'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('OR13hApp'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.stackComponents).toBeUndefined();

    $controller('DeveloperFeaturesController', {
      $scope: scope
    });

    expect(angular.isArray(scope.stackComponents)).toBeTruthy();
    expect(scope.stackComponents.length > 5).toBeTruthy();
  }));
});
