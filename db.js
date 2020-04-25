const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = "crud_mongodb";
const url = "mongodb://loca;host:27017";
const mongoOptions = {useNewUrlParser : true};

const state = {
    db : null
};

const connect = (cb) =>{
    if (state.db)
        cb();
    else{
        MongoClient.connect(url,mongoOption,(err,client)=>{
            if(err)
                 cb(err);
            else{
            state.db = client.db(dbname);
            cb();
                

                }
            });
    }
}
const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}
const getDB = ()=>{
    return state.db;
}

modules.exports = {getDB, connect,getPrimaryKey};