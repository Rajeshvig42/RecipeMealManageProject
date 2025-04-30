const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ✅ View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ✅ Models
const User = require('./backend/models/User');

const orderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  meal: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// ✅ Routes

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/signup', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const newUser = new User({
      name,
      username,
      email,
      password
    });

    await newUser.save();
    res.send('✅ User registered successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('❌ Server error during registration.');
  }
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(400).send('❌ Invalid username or password.');
    }

    res.send(`✅ Welcome ${user.name}! You have logged in successfully.`);
  } catch (error) {
    console.error(error);
    res.status(500).send('❌ Server error during login.');
  }
});

app.get('/order', (req, res) => {
  res.render('order');
});

app.post('/order', async (req, res) => {
  const { username, meal } = req.body;

  try {
    const newOrder = new Order({ username, meal });
    await newOrder.save();
    res.send(`✅ Order placed successfully for ${meal}, ${username}!`);
  } catch (error) {
    console.error(error);
    res.status(500).send('❌ Server error during ordering.');
  }
});

// ✅ Error Handler
app.use(errorHandler);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
