const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const { PORT } = require("./Config");

const app = express();

// Import Routes
const homeRoutes = require("./Routes/Home.Routes");
const actionsRoutes = require("./Routes/Actions.Routes");

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", homeRoutes);
app.use("/pipline", actionsRoutes);

// Error Handler
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () => console.log(`😎 Server is running on port ${PORT}`));
