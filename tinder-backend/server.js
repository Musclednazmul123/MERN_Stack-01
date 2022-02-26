import express from "express";
import mongoose from "mongoose";

// App Config
const app = express();
const port = process.env.PORT || 3000;

// Middleware

// DB config

// API Endpoint
app.get('/', (req, res) => res.status(200).send('hello world !!!!'));

// Listener 

app.listen(port, () => console.log(`listening on localhost: ${port}`));