const connection = require('../bin/connection');

const getChecksTablePersons = async () => { 
    const [query] = await connection
        .execute("SELECT 1 FROM information_schema.tables WHERE table_schema = 'dbnodeapp' AND table_name = 'people'");
    return query;
}

const getCreateTablePersons = async () => {
    const ChecksTablePersons = await getChecksTablePersons();

    if (ChecksTablePersons == "") {
        await connection
            .execute('CREATE TABLE people (id int NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;');
    }
}

const getAllPersons = async () => { 
    const [query] = await connection.execute('SELECT * FROM people LIMIT 5;');
    return query;
}

const getAllPersonById = async (id) => { 
    const [query] = await connection.execute('SELECT * FROM people WHERE id = ?;', [id]);
    return query;
}

const createPerson = async (name) => {     
    const [query] = await connection.execute('INSERT INTO people (name) VALUES (?);', [name]);
    const person = await getAllPersonById(query.insertId);
    return person;
}

module.exports = {
    getAllPersons,
    getAllPersonById,
    createPerson,
    getChecksTablePersons,
    getCreateTablePersons
};