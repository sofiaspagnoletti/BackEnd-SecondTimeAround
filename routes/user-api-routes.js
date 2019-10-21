var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
      include: [db.Post]
    }).then(function(dbUSer) {
      res.json(dbUSer);
    });
  });

//   app.get("/api/users/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.User.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbUSer) {
//       res.json(dbUSer);
//     });
//   });

  app.post("/api/users", function(req, res) {
    console.log("what is user?" +req.body)
    db.User.create(req.body).then(function(dbUSer) {
        
      res.json(dbUSer);
    });
  });

//   app.delete("/api/users/:id", function(req, res) {
//     db.User.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbUSer) {
//       res.json(dbUSer);
//     });
//   });

};
