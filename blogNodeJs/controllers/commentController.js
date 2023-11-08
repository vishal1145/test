const commentService = require("../services/commentService");

exports.comment = async (req, res) => {
    try {
        const comment = await commentService.comment(req.body);
        res.json({data: comment, status: "Success"});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};  