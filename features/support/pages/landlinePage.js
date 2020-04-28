const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}
exports.landlinePage ={
    EnterNumber: function() {
        Selector('#buttonLink');
    }

};