describe('timer component', () => {
  let $compile;
  let $rootScope;

  beforeEach(angular.mock.module('timer'));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should display the current Year', () => {
    const element = $compile('<timer></timer>')($rootScope);

    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain(new Date().getFullYear());
  });
});
