import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@root.com',
        password: bcrypt.hashSync('root123', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: bcrypt.hashSync('root123', 10),
    },
    {
        name: 'Nikolaii',
        email: 'NikolaiiR@reactjs.org',
        password: bcrypt.hashSync('root123', 10),
    }
]

export default users