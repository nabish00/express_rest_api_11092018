import express from 'express';
import bodyParser from 'body-parser';
import ('dotenv').config();
import routes from './routes/routes';
import AdminRoute from './routes/admin/AdminRoutes';


var app = express();

app.get("/",(req,res) => {
    res.send("Hello World")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));


app.use('/api',routes);
app.use('/admin', AdminRoute);


app.listen(8000, () => {
    console.log("Server Listening on 8080");
});