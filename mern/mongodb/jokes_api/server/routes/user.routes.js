const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.index);
  app.get("/api/jokes/:id", JokeController.show);
  app.get("/api/jokes/random", JokeController.random);
  app.post("/api/jokes/create", JokeController.create);
  app.put("/api/jokes/update/:id", JokeController.update);
  app.delete("/api/jokes/delete/:id", JokeController.delete);
};