// index.js
const express = require("express");
const app = express();
const cors = require("cors");
const voiceRoutes = require("./routes/voice");

app.use(cors());
app.use(express.json());
app.use("/api/voice", voiceRoutes); 

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is Listening at Port Number : ${PORT}`);
});
