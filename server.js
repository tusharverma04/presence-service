const express = require("express") ;
const bodyparser = require("body-parser");
const InitiateMongoServer = require("./config/db");

// InitiateMongoServer();

const app = express() ;

// const PORT = process.env.PORT || 4000 ;

app.set("port", process.env.PORT || 4000);

// app.use(express.static("client/build"));
// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    console.log("API WORKING!!")
  }

app.use(bodyparser.json());

app.get("/" , (req, res) => {
    res.json({message: "API Working"})

    console.log("API Working") ;
}) ;

// app.listen(PORT, (req, res) => {
//     console.log('Server Started at PORT `($PORT)`') ;
// }) ;

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
  });

