const mongodb =require('mongodb');

const {MongoClient,ObjectId} = require('mongodb')


const connectionURL='mongodb://127.0.0.1:27017';
const databaseName='task-manager'

const id = new ObjectId()

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log('unable to connect')
    }

    const db = client.db(databaseName);

    db.collection('users').deleteMany({
        age:27
    }).then((me)=>{
        console.log(me)
    }).catch((error)=>{
        console.log(error)
    })
    
})