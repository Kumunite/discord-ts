module.exports = {
    roots: ["<rootDir>/src"],
    testMatch: ["**/test/**/*.test.ts"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
};
