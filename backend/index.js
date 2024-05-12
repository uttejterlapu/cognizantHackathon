const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;
const UserModel = require('./models/User');
const UserModels = require('./models/UserModel');

const multer = require('multer');
const path = require('path');

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["https://cognizant-hackathon.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
})


app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'))

app.use("/", authRoute);

app.post('/api/upload', upload.single('file'), (req, res) => {
  UserModel.create({ image: req.file.filename })
      .then(result => res.json(result))
      .catch(err => console.log(err))
})

app.get('/api/getImage',(req, res)=>{
  UserModel.find()
  .then(users => res.json(users))
  .catch(err => console.log(err))
})




const storages = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.pdf');
    }
});

const uploads = multer({ storage: storages });

app.post('/upload-pdf', uploads.single('pdf'), (req, res) => {
    console.log(req.file); 
    res.json({ message: 'PDF uploaded successfully' });
});


app.get('/api/users/:username', async (req, res) => {
  const username = req.params.username;

  try {
    // Find the user by username in the database
    const user = await UserModels.findOne({username});
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If user is found, return the entire user document
    res.json(user);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});