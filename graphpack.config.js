module.exports = {
    server: {
        applyMiddleware: {
            app,
            path: '/graphql', // default
        },
        port: 4000
    }
};