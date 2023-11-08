const multer = require("multer");
const express = require("express");
const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("server is running on port 8080");
});

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
}).array("user_file", 5);


app.post("/upload", upload, (req, res) => {
    res.send("File Uploaded")
})

app.use(express.static('uploads'));
