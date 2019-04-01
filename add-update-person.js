const AWS = require('aws-sdk');
const { addUpdatePerson } = require('./db.js');
const dbClient = new AWS.DynamoDB.DocumentClient();
export const addupdate = async (event) => {
    const { body } = event;
    const contact = JSON.parse(body)
    
    return await addUpdatePerson(dbClient,{ Item: contact })
}