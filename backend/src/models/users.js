const dbpool = require('../config/database')

const getAllUsers = () => {
    const SQLQuerry = 'SELECT * FROM users';

    return dbpool.execute(SQLQuerry);
}

const createNewUsers = (body) => {
    const SQLQuerry = ` INSERT INTO users(name, email, address) 
                        VALUES('${body.name}', '${body.email}', '${body.address}')`

    return dbpool.execute(SQLQuerry);
}

const updateUsers = (body, idUser) => {
    const SQLQuerry = ` UPDATE users 
                        SET name='${body.name}', email='${body.email}', address='${body.address}'
                        WHERE id=${idUser}`;

    return dbpool.execute(SQLQuerry);
}

const deleteUser = (idUser) => {
    const SQLQuerry = `DELETE FROM users WHERE id=${idUser}`;

    return dbpool.execute(SQLQuerry);
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUser
};