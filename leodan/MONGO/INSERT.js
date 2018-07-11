let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'ldbd'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('Connected successfully to server')

    const db = con.db(dbName)

    db.collection('personas').insert([{
        name: 'Pablo',
        lastname: 'Piccaso'
        age: '67',
        pest: 'perro,gato,pollo'
    }, {
        name: 'dela',
        lastname: 'vida'
        age: '29',
        pets: 'perros'
    }, {
        name: 'leo',
        lastname: 'dan',
        age: '27',
        pest: 'thor','galan'
    }, {
        name: 'pablo',
        lastname: 'escobar',
        age: '44',
        pest: 'perico'
    }, {
        name: 'soda',
        lastname: 'stereo',
        age: '55',
        pest: 'unicornio azul'
    }], function (err, data) {
        console.log(data)
    })
})