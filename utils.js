
const { PERSON_TABLE } = process.env;

// Ugly, can't wait for spread operator to work here
export const getDefaultParams = (options = {}) => {
    return Object.assign({}, { TableName: PERSON_TABLE }, options);
}
 