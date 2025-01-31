const bcrypt = require('bcryptjs');

const password = '#A010mm650u';
bcrypt.hash(password, 10).then(hash => {
    console.log('Store this hash in your .env file:');
    console.log(hash);
}); 