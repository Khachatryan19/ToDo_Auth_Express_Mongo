const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: ['You should enter some text'],
        minLength: [5, 'Text should contain at least 5 characters'],
        trim: true,
    },
    status: Number,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Todo', TodoSchema)