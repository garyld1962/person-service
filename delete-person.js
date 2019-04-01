const AWS = require('aws-sdk');
const { deletePerson } = require('./db.js');
const dbClient = new AWS.DynamoDB.DocumentClient();

export const remove = async (event) => {
    const { id } = event.pathParameters;
    const emailId = decodeURIComponent(id)
    const params = { Key: { email: emailId } } 
    return await deletePerson(dbClient,params)
 
}