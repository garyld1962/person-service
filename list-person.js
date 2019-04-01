const AWS = require('aws-sdk');
const { listPersons } = require('./db.js');
const dbClient = new AWS.DynamoDB.DocumentClient();

export const list = async (event) => {
    
    return await listPersons(dbClient)

}