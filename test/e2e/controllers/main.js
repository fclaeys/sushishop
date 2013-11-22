describe("E2E: Testing Controllers", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working sushies page controller that applies the sushies to the scope', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/");
    pause();
    expect(element('#catalog').html()).toContain('Sushi thon');
    expect(element('#catalog').html()).toContain('Sushi saumon');
    expect(element('#catalog').html()).toContain('Sushi au chat');
    expect(element('#catalog').html()).toContain('Sushi plethore');
    expect(element('#catalog').html()).toContain('Sushi quirielle');
  });

});
