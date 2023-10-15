const express = require('express');

const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

const users = [
    {
        id:1, name : 'newton', email : 'new@gmail.com'
    },
    {
        id: 2 , name : 'Einstine' , email : 'einstine@gmail.com'
    },
    {
        id: 3, name : 'boris jonson', email : 'boris@gmail.com'
    }
]

app.get('/', (req, res) => {
    res.send('user management server is running')
})


app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1 ;

    users.push(newUser);

    res.send(newUser)
})

app.listen(port , ()=> {
    console.log(`server is running port ${port}`)
})