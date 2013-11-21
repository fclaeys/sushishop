stepDefinitions = ->

        @World = require('./support.coffee').World

        @Given /^Je navigue sur la homepage$/, (callback) ->
                @browser.visit @home, callback

        @Then /^Les shushis du catalogue sont affiches$/, (callback) ->
                @browser.text('#catalog').should.have.string "Sushi au chat"
                callback()

module.exports = stepDefinitions