const express = require("express");
const fileRouter = require("./routes/files");
const connectDB = require('./connectDB');
const app = express();

connectDB();

app.use('/files', fileRouter);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('HOME PAGE SHOULD GO HERE');
})
app.listen(PORT, () => console.log(`server is running on https://localhost:${PORT}`))