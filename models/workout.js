// {
//     day: new Date().setDate(new Date().getDate() - 10),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Bicep Curl",
//                 duration: 20,
//                 weight: 100,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
// }

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    day:
    {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },

    exercises:
    {
        type: Array
    }

})

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;