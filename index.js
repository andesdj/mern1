//0 Requires
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// 1 Models
require("./models/User");
// 2 Services
require("./services/passport");
// 3 Config
const keys = require("./config/keys");
const app = express();
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);
// Midlewares
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);