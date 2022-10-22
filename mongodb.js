//CRUD create,read,update and delete

const { MongoClient, ObjectId, Collection } = require('mongodb')

const ConnectionUrl = 'mongodb://127.0.0.1:27017'
const databseName = 'task-manager'

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(ConnectionUrl, {useNewUrlParser: true}, (error,client) => {
    if (error) {
        return console.log('Unable to connect to the databse!')
    }


    const db = client.db(databseName)
    
    // db.collection('Users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    
    db.collection('tasks-collection').deleteOne({
        description : "This is Item 1"
    }).then((result) => {
        console.log(result)

    }).catch((error) => {
        console.log(error)

    })
 })



