
const { getDefaultParams } = require('./utils.js');
 
export const getPerson = async (dbClient, requestParams) => {
         const params = getDefaultParams(requestParams)
         const response = await dbClient.get(params).promise();
         
         if(response.item==='')
         {
             return {
                 statusCode: 404,
                 body: JSON.stringify({
                     message: 'The person was not found'                   
                 })
             }
         }
         return {
             statusCode: 200,
             body: JSON.stringify({
                 message: 'The person requested is',
                 item: response.Item
             })
         }
    }

export const listPersons = async (dbClient) => {
        const params = getDefaultParams()
        const response = await dbClient.scan(params).promise();

        if (response.items === []) {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: 'Person were not found'
                })
            }
        }
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'The persons requested are ',
                item: response.Items || []
            })
        }
    }
export const deletePerson = async (dbClient,requestParams) => {
        const params = getDefaultParams(requestParams)
        await dbClient.delete(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'The person was deleted',              
            })
        }
    }

export const addUpdatePerson = async (dbClient,requestParams) => {
        const params = getDefaultParams(requestParams)
        await dbClient.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'The person was sucessfully added'
            })
        }
    }


 