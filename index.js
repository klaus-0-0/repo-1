const express = require('express');
const app = express();
require('dotenv').config()
// const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hllo");
})

// app.listen(process.env.PORT, () => {
//     console.log('app listning on ', '${PORT}')
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});