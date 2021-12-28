const express = require('express', 4.17);
const cors = require('cors');   
const app = express();
const pg = require('pg');
const db = require('./db');

// Json Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080'
}));

// Routes
app.get('/api/analytics', async(req, res) => {
    try{
        //await
        const setSchema = await db.query("SET SEARCH_PATH TO co2_emission_analytics;");
        const data = await db.query("SELECT * FROM shipments limit 10;");
        res.json(data.rows);
    } catch(err) {
        console.error(err.message);
    }
});
//Date Range filtering Route
app.post('/api/analytic', async(req, res) => {
    try{
        const setSchema = await db.query("SET SEARCH_PATH TO co2_emission_analytics;");
        //Selecting date range from timestamp columns
        const results = await db.query('SELECT * FROM shipments WHERE dropoff_time::date BETWEEN date ($1) AND date ($2);', [req.body.final_from_date, req.body.final_to_date]);
        res.json(results.rows);

    }catch(err) 
    {
        console.log(err.message)
    }
});

//Insertion Route
app.post('/api/new_shipment', async(req, res) => {
    try {
        console.log(req.body);
        const setSchema = await db.query("SET SEARCH_PATH TO co2_emission_analytics;");
        const newAnalytics = await db.query(
            "INSERT INTO shipments (id, shipment_id, weight_kg, distance_km, pickup_time, dropoff_time) VALUES($1, $2, $3, $4, $5, $6);",
            [req.body.id, req.body.shipment_id, req.body.weight_kg, req.body.distance_km, req.body.pickup_time, req.body.dropoff_time]);
            res.json(newAnalytics.rows);
    }catch(err) {
        console.log(err.message);
    }
    
})


const port = process.env.PORT  || 3000 ;
app.listen(port, () => {
    console.log(`Server Listening on port ${port} ...`);
})
