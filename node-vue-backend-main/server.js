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

app.get('/ab', (req, res) => {
    res.send("Hi");
});
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

app.get('/api/analytics/:dropoff', async(req, res) => {

    try{

        const setSchema = await db.query("SET SEARCH_PATH TO co2_emission_analytics;");
        const {dropoff} = req.params;
        console.log(dropof);
        const dropof = await db.query("SELECT * FROM shipments where dropoff_time = ($1)", [dropoff]);
        res.json(dropof.rows);

    }catch(err) 
    {
        console.log(err.message)
    }
   
});

app.post('/api/analytics', async(req, res) => {
    try {
        const setSchema = await db.query("SET SEARCH_PATH TO co2_emission_analytics;");
        const newAnalytics = await db.query(
            "INSERT INTO shipments (id, shipment_id, weight_kg, distance_km, pickup_time, dropoff_time) VALUES($1, $2, $3, $4, $5, $6);",
            [req.body.id, req.body.shipment_id, req.body.weight_kg, req.body.distance_km, req.body.pickup_time, req.body.dropoff_time]);
            console.log('data inserted successfully.');
    }catch(err) {
        console.log(err.message);
    }
    
})



const port = process.env.PORT  || 3000 ;
app.listen(port, () => {
    console.log(`Server Listening on port ${port} ...`);
})
