const getAllUsers = (req, res) => {
    const data = {
        id: '1',
        name : "Ekky",
        email: "ekky2023@gmail.com",
        mobil: "bmw m4"
    }

    res.json({
        message: 'GET all users success',
        datas: data
    })
}

const createNewUsers = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new users success',
        data: req.body
    })
}


const updateUsers = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message: 'UPDATE user success',
        data: req.body,
    })
}


const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: idUser,
            name : "Ekky",
            email: "ekky2023@gmail.com",
            mobil: "bmw m4"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUser,
};