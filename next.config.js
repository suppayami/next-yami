const path = require('path')

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/graphql',
                // TODO: Change API Endpoint
                destination: 'https://fakeql.com/graphql/b80d41f34d70d05989ad22ff063a0709',
            },
        ]
    },
    webpack(config, _options) {
        config.resolve.alias['@'] = path.join(__dirname, 'src')
        return config
    },
}
