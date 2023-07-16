const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const PORT = 3001;

const db = require("./models");

// ROUTERS
const userRouter = require("./routes/User");
app.use("/user", userRouter);

const contactRouter = require("./routes/Contact");
app.use("/contacts", contactRouter);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
