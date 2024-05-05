const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contact-route"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server runnning on port ${port}`);
});
