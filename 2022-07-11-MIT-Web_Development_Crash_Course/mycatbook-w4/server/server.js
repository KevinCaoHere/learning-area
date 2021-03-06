/*
|--------------------------------------------------------------------------
| server.js -- The core of your server
|--------------------------------------------------------------------------
|
| This file defines how your server starts up. Think of it as the main() of your server.
| At a high level, this file does the following things:
| - Connect to the database (TODO: WORKSHOP 5)
| - Sets up server middleware (i.e. addons that enable things like json parsing) (TODO: WORKSHOP 3)
| - Hooks up all the backend routes specified in api.js (TODO: WORKSHOP 4)
| - Sets up error handling in case something goes wrong when handling a request (TODO: WORKSHOP 3)
| - Actually starts the webserver
*/

// import libraries needed for the webserver to work!
const express = require("express"); // backend framework for our node server.
const path = require("path");

// create a new express server
const app = express();

// internal server error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;

  if (status === 500) {
    console.log("Error Occurred");
    console.log(err);
  }

  res.status(status);
  res.send({ status: status, message: err.message });
});

// back-end entrance
const reactPath = path.resolve(__dirname, "..", "client", "dist"); // directory path
app.use(express.static(reactPath));

app.get("/api/test", (req, res) => {
  res.send({ message: "Wow I made my first API!" });
});

app.get("*", (req, res) => {
  // res.send("Endpoint B");
  res.sendFile(path.join(reactPath, "index.html"));
});


// hardcode port to 3000 for now
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
