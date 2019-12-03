const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var expressStaticGzip = require("./compression");


const publicPath = path.join(__dirname, "..", "public");
const staticPath = path.join(__dirname, "..", "public","static")
const port = process.env.PORT || 3000



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', expressStaticGzip(staticPath, {
    urlContains: 'static/',
    fallthrough: false,
    enableBrotli: true
   }));

   
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"))
});


app.listen(port, () => {
    console.log("Server running");
})
