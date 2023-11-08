const commentModel = require("../models/commentModel");

exports.comment = async(comment) => {
    return await commentModel.create(comment);
};