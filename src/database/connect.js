const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cadastrousers.6lr0h9h.mongodb.net/?retryWrites=true&w=majority&appName=CadastroUsers`);
        console.log("Conexão efetuada com sucesso ao banco de dados!")
    }
    catch (error){
        console.log("Erro ao se conectar com o banco de dados", error);
    }
}
module.exports = connectToDatabase;