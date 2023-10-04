const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    // const data = await UsersModel.getAllUsers();
    // jika kita hanya ingin mendapatkan data saja dan tidak ingin memberikan fieldsnya maka
    // kita dapat melakukan desctruturing pada data kita yaitu dengan berikut: 
    // const [data] = await UsersModel.getAllUsers();

    try{
        const [data] = await UsersModel.getAllUsers();
        
        res.json({
            message: 'GET all users success',
            datas: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error, Please wait until we fixed',
            serverMessage: error
        })
    }
}

const createNewUsers = async(req, res) => {
    const {body} = req;
    
    try{
        await UsersModel.createNewUsers(body);
        res.status(201).json({
            message: 'CREATE new users success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error, please be patient',
            serverMessage: error
        })
    }
}


const updateUsers = async(req, res) => {
    const {idUser} = req.params;
    const {body} = req;

    try{
        await UsersModel.updateUsers(body, idUser)
        res.json({
            message: 'UPDATE on users success',
            data: {
                id: idUser,
                ...body
            }
        })
    } catch(error) {
        res.status(500).json({
            message: 'Server error cannot update user',
            serverMessage: error
        })
    }
}


const deleteUser = async (req, res) => {
    const {idUser} = req.params;

    try{
        await UsersModel.deleteUser(idUser)
        res.json({
            message: 'DELETE on users success',
            data: null
        })
    }catch(error){
        res.status(500).json({
            message: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUser,
};