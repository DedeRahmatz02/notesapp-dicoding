const AuthenticationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'authentications',
    version: '1.0.0',
    register: async (server, {
        authentiationsService,
        usersService,
        tokenManager,
        validator,
    }) => {
        const authenticationsHandler = new AuthenticationsHandler(
            authentiationsService,
            usersService,
            tokenManager,
            validator,
        );

        server.route(routes(authenticationsHandler));
    },
};