const express = require("express");

const app = express();
app.use(express.json());

const cRoutes = require("../routes/company");
app.use("/companies", cRoutes);

app.listen(3000, function () {
    console.log("Server started on 3000");
});