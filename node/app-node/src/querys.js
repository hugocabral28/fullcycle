const connection = require('../bin/connection');

const getAllPersons = async () => { 
    const [query] = await connection.execute('SELECT * FROM dbnodeapp.people LIMIT 5;');
    return query;
}

const getAllPersonById = async (id) => { 
    const [query] = await connection.execute('SELECT * FROM dbnodeapp.people WHERE id = ?;', [id]);
    return query;
}

const createPerson = async (name) => {     
    const [query] = await connection.execute('INSERT INTO dbnodeapp.people (name) VALUES (?);', [name]);
    const person = await getAllPersonById(query.insertId);
    return person;
}

module.exports = {
    getAllPersons,
    getAllPersonById,
    createPerson,    
};