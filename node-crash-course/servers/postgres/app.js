const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./models');
// const { initial } = require('lodash');
const Role = db.role;

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
  });

let corOptions = {
    origin:"http://localhost:8081"
};


db.sequelize.sync({force:true}.then(()=>{
    console.log('Drop and Resync')
    initial();
}))

function initial(){
    Role.create({
       id:1, 
       name:"user" 
    })
    Role.create({
       id:2, 
       name:"moderator" 
    })
    Role.create({
       id:3, 
       name:"admin" 
    })

}

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.json({message:"Welcome Hola!"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`SErver is listening in ${PORT}`)
})