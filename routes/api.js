/*
 * Serve JSON to our AngularJS client
 */

 var jsonWork = {
  "posts": [
    {
      title: "Park As Pharmacy.",
      subtitle: "A leaf identification app for Android.",
      text: "This app was developed in parternship with Rena Lee, a student at Parsons School of Design.  The app allows you to input leaf characteristics to identify different species of plants, and search leaves by medicinal properties. ",
      language: "Frontend coded in Java + XML. Backend coded in Java + SQLite",
      image: "https://dl.dropboxusercontent.com/u/2606800/2013-07-22%2019.31.06.png",
      gallery: ["https://dl.dropboxusercontent.com/u/2606800/2013-07-22%2019.29.58.png","https://dl.dropboxusercontent.com/u/2606800/2013-07-22%2019.30.28.png","https://dl.dropboxusercontent.com/u/2606800/2013-07-22%2019.31.06.png"],
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

