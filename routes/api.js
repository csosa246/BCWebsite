/*
 * Serve JSON to our AngularJS client
 */

 //For sending emails
var nodemailer = require("nodemailer");


var jsonWork = {
    "posts": [
        {
            title: "Park As Pharmacy.",
            subtitle: "A leaf identification app for Android.",
            text: "This app was developed in parternship with Rena Lee, a student at Parsons School of Design.  The app allows you to input leaf characteristics to identify different species of plants, and search leaves by medicinal properties. ",
            language: "Frontend coded in Java + XML. Backend coded in Java + SQLite",
            image: "https://dl.dropboxusercontent.com/u/2606800/2013-07-22%2019.31.06.png",
            gallery: ["https://dl.dropboxusercontent.com/u/2606800/2013-07-22%2019.29.58.png", "https://dl.dropboxusercontent.com/u/2606800/2013-07-22%2019.30.28.png", "https://dl.dropboxusercontent.com/u/2606800/2013-07-22%2019.31.06.png"],
            height: 640,
            width: 350,
        },
        {
            title: "CCNY Mobile.",
            subtitle: "A student and alumni app for Android.",
            text: "This app was developed for the City College of New York.  The app is a basic , including news, a directory, course schedule and a map.  The map interfaces with NextBus in order to provide real-time shuttle bus locations + predictions.",
            language: "Frontend coded in Java + XML. Backend coded in Java + Ruby on Rails",
            image: "https://dl.dropboxusercontent.com/u/2606800/2013-05-03_00-31-45.png",
            gallery: ["https://dl.dropboxusercontent.com/u/2606800/2013-05-03_00-31-45.png"],
            height: 640,
            width: 350,
        }
    ]
}

var jsonMusic = {
    "tracks": [
        {
            link: "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F26962355",
        },
        {
            link: "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F26962355",
        },
        {
            link: "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F17364289"
        }
    ]
}

var jsonDesign = {
    "posts": [
        {
            title: "Neuschwanstein Castle.",
            subtitle: "A Bavarian Castle map design on the Valve Engine.",
            text: "This app was developed in parternship with Rena Lee, a student at Parsons School of Design.  The app allows you to input leaf characteristics to identify different species of plants, and search leaves by medicinal properties. ",
            language: "Frontend coded in Java + XML. Backend coded in Java + SQLite",
            image: "https://photos-6.dropbox.com/t/0/AAAxv_psBslgDnG6ZrOCtF2XDp8XeNkuJwdQR_t6HeR3Qg/12/2606800/jpeg/1024x768/3/1377097200/0/2/neu_d0044.jpg/N_BkgfjV9g8NWWbdNkxKupqVAjvDueIHodBsFur6skY",
            gallery: ["https://photos-6.dropbox.com/t/0/AAAxv_psBslgDnG6ZrOCtF2XDp8XeNkuJwdQR_t6HeR3Qg/12/2606800/jpeg/1024x768/3/1377097200/0/2/neu_d0044.jpg/N_BkgfjV9g8NWWbdNkxKupqVAjvDueIHodBsFur6skY", "https://www.dropbox.com/s/lzv23w1vsvaf3n6/neu_d0044.jpg", "https://www.dropbox.com/s/lzv23w1vsvaf3n6/neu_d0044.jpg"],
            height: 840,
            width: 640,


        },
        {
            title: "CCNY Mobile.",
            subtitle: "A student and alumni app for Android.",
            text: "This app was developed for the City College of New York.  The app is a basic , including news, a directory, course schedule and a map.  The map interfaces with NextBus in order to provide real-time shuttle bus locations + predictions.",
            language: "Frontend coded in Java + XML. Backend coded in Java + Ruby on Rails",
            image: "https://dl.dropboxusercontent.com/u/2606800/2013-05-03_00-31-45.png",
            gallery: ["https://dl.dropboxusercontent.com/u/2606800/2013-05-03_00-31-45.png"],
            height: 640,
            width: 350,
        }
    ]
}


//-------------------------------------------------------------------------------//
//WORK Web Services
//-------------------------------------------------------------------------------//

//Load all posts 
exports.work = function (req, res) {
    res.json(jsonWork);
};

//Individual post
exports.workGallery = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < jsonWork.posts.length) {
        res.json({
            post: jsonWork.posts[id].gallery
        });
    } else {
        res.json(false);
    }
};

//-------------------------------------------------------------------------------//
//MUSIC Web Services
//-------------------------------------------------------------------------------//

//Load all posts 
exports.music = function (req, res) {
    res.json(jsonMusic);
};

//-------------------------------------------------------------------------------//
//DESIGN Web Services
//-------------------------------------------------------------------------------//

//Load all posts 
exports.design = function (req, res) {
    res.json(jsonDesign);
};

//Individual post
exports.designGallery = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < jsonDesign.posts.length) {
        res.json({
            post: jsonDesign.posts[id].gallery
        });
    } else {
        res.json(false);
    }
};
//-------------------------------------------------------------------------------//
//CONTACT Web Services
//-------------------------------------------------------------------------------//

exports.contact = function(req,res){
    var sender = req.body.name; 
    var mess = req.body.message;

    //create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "crae.sosa@gmail.com",
            pass: "[abcd4321]"
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "<csosa246@gmail.com>", // sender address
        to: "crae.sosa@gmail.com", // list of receivers
        subject: "Message from : " + sender, // Subject line
        text: mess, // plaintext body
        html: "<b>"+mess+"</b>" // html body
    }

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.json(error);
        }else{
            console.log("Message sent: " + response.message);
            res.json("Message sent: " + response.message);
        }

        smtpTransport.close(); // shut down the connection pool, no more messages
    });

}


