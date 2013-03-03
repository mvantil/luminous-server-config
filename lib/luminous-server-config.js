var fs = require('fs');

function Config() {
    this.load = function(callback) {
        fs.readFile('./.luminousrc', function(err, data) {
            if (err) return callback(err);

            try {
                callback(null, JSON.parse(data));
            } catch(err) {
                callback(err);
            }
        });
    };
}

module.exports = Config;
