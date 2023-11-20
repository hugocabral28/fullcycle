const querys = require('../querys');

exports.get = async (req, res) => {
    await querys.getCreateTablePersons();
    
    const query = await querys.getAllPersons();
    
    res.render('home', {               
        pessoas: query,
        message: null
    });

};

exports.post = async (req, res) => { 
    const { name } = req.body;
    const query = await querys.createPerson(name);
    const queryConsult = await querys.getAllPersons();
    
    return res.status(201).render('home', {
        pessoas: queryConsult,
        message: query
    });

};
