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
    webpack(config, _options) {
        config.resolve.alias['@'] = path.join(__dirname, 'src')
        return config
    },
}
