const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const jsonParser = express.json();
// const {check} = require('express-validator');
// const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
// const { response } = require("express");
// const {secret} = './config'

const { secret } = {
    secret: "SECRET_KEY_RANDOM"
}

const generateAccessToken = (id, userName) => {
    const payload = {
        id,
        userName
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
};

// установка схемы
const accessorySchema = new Schema({
    img: {type: String, required: true},
    category: { type: String, required: true},
    model: { type: String, required: true },
    price: { type: Number, required: true},
    discription: { type: String},
    color: {type: String},
    material: {type: String},
    isActive: {type: Boolean}
}, { versionKey: false });

const userSchema = new Schema({
    email: { type: String,  required: true},
    userName: { type: String, required: true },
    password: { type: String, required: true, minlength: 8}
}, { versionKey: false });

const userUpdateSchema = new Schema({
    lastname: {type: String},
    name: {type: String},
    userName: {type: String},
    email: {type: String},
    telephone: {type: Number},
    city: {type: String},
    area: {type: String},
    street: {type: String},
    home: {type: String},
    apartament: {type: Number},
},{versionKey: false})

const Accessory = mongoose.model('Accessories', accessorySchema)
const User = mongoose.model('Users', userSchema)
const UserUpdate = mongoose.model('UserUpdate', userUpdateSchema)


app.use(express.static(__dirname + "/public"));

const url = "mongodb+srv://Nasirdin:Nasi191202.@cluster0.auwjh.mongodb.net/mobilus?retryWrites=true&w=majority";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
    if(err) return console.log(err);
    app.listen(8090, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.use(cors())


app.post('/api/users/registration',jsonParser, async (req, res) => {
    const email = req.body.email;
    const userName = req.body.userName;
    const password = req.body.password;
    const canditate = await User.findOne({email});
    const candidate2 = await User.findOne({userName});
    if (canditate) {
        return res.send('error email')
    } else if (candidate2) {
        return res.send(` error login`);
    } 
        const hashPassword = bcrypt.hashSync(password, 7);
        const user = new User({
            email: email,
            userName: userName,
            password: hashPassword
        });
        user.save( (err, docs) => {
            if(err) res.send(err);
            return res.send('great')
        })
})


app.post('/api/users/login', jsonParser, async (req, res) => {
    const {userName, password} = req.body;
    const user = await User.findOne({userName});
    
    if (!user) {
        console.log(`Пользователь ${userName} не найден`);
        return res.status(400).json({message:  `Пользователь ${userName} не найден`})
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        console.log('Введен неверный пароль');
        return res.status(400).json({message: 'Введен неверный пароль'})
    }
    console.log(res);
    const token = generateAccessToken(user._id, user.email)
    return res.json({user})
})

// app.post('/api/users/auth', auth, async (req, res) => {
//     if (!user) {
//         console.log(`Пользователь ${userName} не найден`);
//         return res.status(400).json({message:  `Пользователь ${userName} не найден`})
//     }
//     const validPassword = bcrypt.compareSync(password, user.password);
//     if (!validPassword) {
//         console.log('Введен неверный пароль');
//         return res.status(400).json({message: 'Введен неверный пароль'})
//     }
//     console.log(res);
//     const token = generateAccessToken(user._id, user.email)
//     return res.json({ token, user})
// })

app.post('/api/user/update', jsonParser, (req, res) => {
    const {lastname, name, userName, email, telephone, city, area, street, home, apartament, id} = req.body;
    const userUpdate = new UserUpdate({
        _id: id,
        lastname: lastname,
        name: name,
        telephone: telephone,
        userName: userName,
        email: email,
        city: city,
        area: area,
        street: street,
        home: home,
        apartament: apartament
    })
    console.log(userUpdate);
    userUpdate.save((err, docs) => {
        if(err) return console.log(err)
        console.log(docs)
        
    })
})


app.post('/api/add/goods', jsonParser, (req, res) => {
    const accessory = new Accessory(req.body)
    accessory.save((err, docs) => {
        if(err) res.send(err)
        res.send(docs)
    })
})

app.get('/api/accessory', (req, res) => {
    Accessory.find({}, (err, users) => {
        if(err) res.send(err)
        res.send(users)
    })
})


app.get("/api/user", (req, res) => {
    const email = req.body.email;
    console.log(email);
    UserUpdate.findOne({email}, (err, user) => {
        if(err) return console.log(err)
        console.log(user)
    })
})