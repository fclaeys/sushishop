describe("E2E: Testing Controllers", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working sushies page controller that applies the sushies to the scope', function() {
    browser().navigateTo('#/');
    pause();
    expect(browser().location().path()).toBe("/");
    expect(element('#catalog').html()).toContain('Sushi thon');
  });

});
