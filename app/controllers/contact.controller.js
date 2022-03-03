exports.create = async(req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = async(req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOne = async(req, res) => {
    res.send({ message: "findOne handler" });
};

exports.update = async(req, res) => {
    res.send({ message: "update handler" });
};

exports.delete = async(req, res) => {
    res.send({ message: "delete handler" });
};

exports.deleteAll = async(req, res) => {
    res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = async(req, res) => {
    res.send({ message: "findAllFavorite handler" });
};