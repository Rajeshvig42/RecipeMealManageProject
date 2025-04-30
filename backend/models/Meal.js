const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Meal', mealSchema);
