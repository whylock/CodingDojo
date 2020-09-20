const HolderController = require('../controllers/holder.controller.js');


module.exports = (app) => {
    app.get("/api/holder", HolderController.index);
    app.post("/api/holder/create", HolderController.create);
    app.get("/api/holder/:id", HolderController.showOne);
    app.put("/api/holder/update/:id", HolderController.updateOne);
    app.delete("/api/holder/destory/:id", HolderController.destroy);     
}