const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js', "jest-fetch-mock"],
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)