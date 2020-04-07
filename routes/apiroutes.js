var db = require("../models")

function apiroutes(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(response => {
            res.json(response)
        })
    })
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then(response => {
            res.json(response);
        })
    })
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
            function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                    res.json(success);
                }
            });
    })
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(response => {
            res.json(response);
        })
    })

}

module.exports = apiroutes;