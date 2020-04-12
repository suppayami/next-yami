const path = require('path')

module.exports = {
    experimental: {
        async rewrites() {
            return [
                {
                    source: '/api/graphql',
                    destination: 'https://fakeql.com/graphql/dd9d96f3a7fb35c5d0a7ba122ae66fe5',
                },
            ]
        },
    },
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
    },
}
