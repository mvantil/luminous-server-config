var fs = require('fs');

function Config() {
    this.loadModule = function(moduleName) {
        return require(this.load().modules[moduleName]);
    };

    this.load = function(callback) {
        if (!callback) return JSON.parse(fs.readFileSync('./.luminousrc'));

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

module.exports = new Config();
