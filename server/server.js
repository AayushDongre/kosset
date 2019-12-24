const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var expressStaticGzip = require("./compression");
const mailer = require('../functions/mailer')


const publicPath = path.join(__dirname, "..", "public");
const staticPath = path.join(__dirname, "..", "public", "static")
const port = process.env.PORT || 3000



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', expressStaticGzip(publicPath, {
    urlContains: '/static',
    fallthrough: false,
    enableBrotli: true
}));


app.post("/send", (req, res) => {
    const mailUser = {
        from: "admin@sudodevs.com",
        to: "aayush@sudodevs.com",
        subject: "Welcome to Kosset",
        html: "bruhhh"
    }
    mailer.sendMail(mailUser, (err) => {
        if (err) {
            console.log(err)
            res
        }
    })
});


app.listen(port, () => {
    console.log("Server running");
})
