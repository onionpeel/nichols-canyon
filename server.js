const express = require('express');
const dbConnect = require('./config/dbConnect');

const app = express();
dbConnect();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/user', require('./routes/user'));
app.use('/comment', require('./routes/comment'));
app.use('/authenticate', require('./routes/authenticate'));

app.get('/', (req, res) => {
  res.send('Hello to Nichols Canyon');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
