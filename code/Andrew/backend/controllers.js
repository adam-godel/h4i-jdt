const models = require('./models')

exports.getData = async (req, res) => {
    try {
        const rows = await models.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.postData = async (req, res) => {
    try {
        const newRow = await models.create(req.body);
        res.status(201).json(newRow);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await models.deletePostById(id);
        res.status(200).send(`Deleted post with id: ${id}`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};