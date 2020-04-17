module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testMatch: ['**/__tests__/*.(ts|tsx)'],
    testPathIgnorePatterns: ['./.next/', './node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
}
