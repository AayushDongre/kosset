require("core-js/stable")
require("regenerator-runtime/runtime");
const firebase = require("firebase/app")
require("firebase/storage");
global.XMLHttpRequest = require("xhr2");
const firebaseConfig = require("./firebase.config.json")
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
const https = require("https")

class FirebaseRequests {


    uploadReport(upload, id) {
        try {
            const file = upload;
            const ref = storage.ref().child("reports").child(id);
            const metadata = {
                name: file.name,
                size: file.size,
                contentType: file.type
            };
            console.log(file)
            ref.put(file, metadata).then((snapshot) => {
            });

        } catch (err) {
            console.log(err);
            // res.status(500).send(err)
        }
    }



    downloadReport(id) {

        const ref = storage.ref().child("reports")
        const reportRef = ref.child(id);

        let name = "", extension = "";
        reportRef.getDownloadURL().then((url) => {
            try {

                reportRef.getMetadata().then((metadata) => {
                    name = metadata.name;
                    extension = metadata.contentType;
                }).catch((error) => {
                    console.log(error);
                })

                fetch(url)
                    .then(response => {
                        response.blob().then(blob => {
                            let url = window.URL.createObjectURL(blob);
                            let a = document.createElement('a');
                            a.href = url;
                            a.download = name;
                            a.click();
                        });
                    });
            } catch (error) {
                console.log(error)
            }

        }).catch(function (error) {

            switch (error.code) {
                case 'storage/object-not-found':
                    return "Not found"
                default:
                    return "Error fetching report"
            }
        });
    }

    deleteReport(id){
        const ref = storage.ref().child("reports");
        try {
            ref.child(id).delete().then(() => {
                console.log(id + " deleted");
            })
        } catch (e) {
            console.log(e)
        }
    }

    async listReports() {
        const ref = storage.ref().child("reports");
        return ref.listAll();
    }

}


module.exports = FirebaseRequests