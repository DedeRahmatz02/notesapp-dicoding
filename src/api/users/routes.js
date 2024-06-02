const routes = (handler) => [
    {
        method: 'POST',
        path: '/users',
        handler: handler.postUserHandler,
    },
    {
        method: 'GET',
        path: '/users',
        handler: handler.getUserHandler,
    },
];

module.exports = routes;