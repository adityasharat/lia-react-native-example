var path = require("path");
var config = {
    getProjectRoots() {
        return [
            // Keep your project directory.
            path.resolve(__dirname),

            // Include your forked package as a new root.
            path.resolve(__dirname, "../lia-sdk-core-js")
        ];
    }
}
module.exports = config;