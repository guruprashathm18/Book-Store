const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);


mongoose.connect(
    "mongodb+srv://admin:mKmhnma1G9eZslUl@cluster0.nxak37f.mongodb.net/bookstore?retryWrites=true&w=majority"
)
.then(()=> console.log("Connected To Database"))
.then(()=> {
    app.listen(5000);
})
.catch((err) => console.log(err));

// mKmhnma1G9eZslUl
// mongodb+srv://admin:mKmhnma1G9eZslUl@cluster0.nxak37f.mongodb.net/
//mongodb+srv://admin:<password>@cluster0.nxak37f.mongodb.net/
