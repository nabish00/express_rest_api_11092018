import express from 'express';

var app = express();

app.get("/",(req,res) => {
    res.send("Please Use Appropriate Routes")
})


app.listen(8000, () => {
    console.log("Server Listening on 8080");
});