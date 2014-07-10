'use strict';

describe('Controller: MusicCtrl', function () {

  // load the controller's module
  beforeEach(module('aeronswakecomApp'));

  var MusicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MusicCtrl = $controller('MusicCtrl', {
      $scope: scope
    });
  }));

  it('should do nothing', function () {
  });
});
