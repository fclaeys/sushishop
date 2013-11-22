stepDefinitions = ->

        @World = require('./support.coffee').World

        @Given /^Je navigue sur la homepage$/, (callback) ->
                @browser.visit @home, callback

        @Then /^Les shushis du catalogue sont affiches$/, (callback) ->
                @browser.text('#catalog').should.have.string "Sushi thon"
                callback()

        @When /^Je clique sur le plus de sushi thon/, (callback) ->
                @browser.click("#catalog-click-item-1")
                callback()

        @Then /^Mon panier contient un sushi thon/, (callback) ->
                @browser.text('#cart-item-1').should.have.string "Sushi thon"
                callback()

module.exports = stepDefinitions
