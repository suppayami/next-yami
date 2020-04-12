const path = require('path')

module.exports = {
    webpack(config, options) {
        config.resolve.alias['@'] = path.join(__dirname, 'src')

        if (!options.isServer) {
            config.optimization.splitChunks.cacheGroups.vendors = {
                name: 'vendors',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](react-redux|redux|axios|@fortawesome)[\\/]/,
            }
        }

        return config
    }
}
