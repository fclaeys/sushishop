Browser = require('zombie')
should = require('chai').should()

World = (callback) ->
        @browser = new Browser()
        # @browser.debug = true
        @browser.waitFor = 1
        @home = 'http://localhost:9000/#/'
        callback()

exports.World = World