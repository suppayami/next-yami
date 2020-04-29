const path = require('path')

module.exports = {
    experimental: {
        async rewrites() {
            return [
                {
                    source: '/api/graphql',
                    // TODO: Change API Endpoint
                    destination: 'https://fakeql.com/graphql/50b00b286343f454e93504e5df822d98',
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
