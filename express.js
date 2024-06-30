const express = require('express');
// model
const UserModel = require('./src/models/use.model');
const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
    try{
       const users = await UserModel.find({});

        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
});

app.get('/users/:id', async (req, res) => {
   try{
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
   }
   catch(error){
        return res.status(500).send(error.message);
   }
});

app.post('/users', async (req, res) => {
   try{
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
   }
   catch (error){
    return res.status(500).send(error.message);
   }  
})

app.patch('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(user);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
});

app.delete('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findOneAndDelete(id);
        res.status(200).json(user);
    }
    catch(error){
       res.status(500).send(error.message)
    }
});

const port = 2020;

app.listen(port, () => {console.log(`Servidor rodando com sucesso na porta: ${port}`)});