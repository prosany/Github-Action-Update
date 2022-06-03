require("dotenv").config();
const Config = {};

Config.PORT = process.env.PORT || 9536;
Config.NODE_ENV = process.env.NODE_ENV || "development";
Config.SIM_URL = process.env.SIM_URL;
Config.SIM_ID = process.env.SIM_ID;
Config.SIM_TOKEN = process.env.SIM_TOKEN;

module.exports = Config;
