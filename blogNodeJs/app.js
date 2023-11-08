const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("server is running on port 3001");
})

let dev_db_url = 'mongodb+srv://yashgupta7247:Y%40sh7247@cluster0.4pumz8s.mongodb.net';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.export = app;

const blogRouter = require("./routes/BlogRoutes");
const commentRouter = require("./routes/commentRoutes");

app.use("/api/blogs", blogRouter);
app.use("/api/blogs", commentRouter);
