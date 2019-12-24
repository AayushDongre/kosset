const nodeMailer = require("nodemailer");

const transport = {
    host:"smtp.yandex.com",
    port: 465,
    secure: true,
    auth:{
        user:"admin@sudodevs.com",
        pass:"sony1234"
    }
}

const transporter = nodeMailer.createTransport(transport)

transporter.verify((error,success) => {
    if(error){
        console.log(error)
    }
})

module.exports = transporter