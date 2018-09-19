import express from 'express';
import routes from './routes/routes';
import AdminRoute from './routes/admin/AdminRoutes';

var app = express();

app.get("/",(req,res) => {
    res.send("Hello World")
});

app.use('/api',routes);
app.use('/admin', AdminRoute);


app.listen(8000, () => {
    console.log("Server Listening on 8080");
});