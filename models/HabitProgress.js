const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/habitHeroDB");


const habitProgressSchema = new mongoose.Schema({
    userId: String,  // use string to store demo user
    habitName: {
        type: String,
        required: true
    },
    completedLevels: {
        type: [Number],
        default: []
    }
});





module.exports = mongoose.model('HabitProgress', habitProgressSchema);
