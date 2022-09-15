const express = require('express')
const bodyParser = require('body-parser')
const corse =require('cors')
const app = express()
const mysql = require ('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root' ,
    password: 123456789,
    database: 'RestaurantDB'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/api/insert", (req, res)=> {

    const listOfFriends = req.body.FriendsList

    const sqlInsert = "INSERT INTO FriendsList (FriendsList) VALUES (?,?)"
    db.query(sqlInsert,[listOfFriends], (err, result) => {
        console.log(err)
    })
})



app.listen(3000,() => {
    console.log('running on port 3000! :))')
} )
