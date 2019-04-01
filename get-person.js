const AWS = require('aws-sdk');
const { getPerson } = require('./db.js');
const dbClient = new AWS.DynamoDB.DocumentClient();

export const get = async (event) => {
    const { id } = event.pathParameters;
    const emailId = decodeURIComponent(id)
    const params = { Key: { email: emailId } } 
    return await getPerson(dbClient,params)
}