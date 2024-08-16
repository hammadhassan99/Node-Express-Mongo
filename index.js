const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());


const mongoURI = 'mongodb+srv://hammadhassan0299:DtXiD9CEONRs5keS@cluster0.a9wyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0g';


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is connected...'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Happy Independence day!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
