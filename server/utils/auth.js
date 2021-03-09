const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    signToken: function({ username, email, id}) {
        const payload = { username, email, id };

        return jwt.sign( {data: payload }, secret, {expiresIn: expiration });
    }
};