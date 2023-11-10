const connection = require('../bin/connection');

const getAllPersons = async () => { 
    const [query] = await connection.execute('SELECT * FROM dbnodeapp.people LIMIT 5;');
    return query;
}

const createPerson = async (name) => {     
    const [query] = await connection.execute('INSERT INTO dbnodeapp.people (name) VALUES (?);', [name]);
    const person = await getAllPersonById(query.insertId);
    return person;
}

module.exports = {
    getAllPersons,
    createPerson  
};