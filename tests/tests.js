var test = require('tape');

test('positive control', function(t){
    t.equal(1,1);
    t.end();
});


test('negative control', function(t){
    t.equal(1,2);
    t.end();
});


