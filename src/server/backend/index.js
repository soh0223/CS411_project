// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/CS411_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to CS411_project database');
});

// Mongoose schema definition
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    gender: String,
    birthday: String,
});

// Mongoose model creation
const User = mongoose.model('User', UserSchema);

// Middleware setup
app.use(express.json());
app.use(cors());

// Sample route
app.get('/', (req, res) => {
    res.send('App is working');
});

// Route to handle user registration
app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            res.send(req.body);
            console.log(result);
        } else {
            console.log('User already registered');
        }
    } catch (e) {
        console.error('Something went wrong:', e);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
