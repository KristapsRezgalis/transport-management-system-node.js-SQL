'use strict'

const {Client} = require('pg');
const express = require('express');
const app = express();
app.use(express.json());
//const port = 3000;

const myConnection = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "DiO1234%MedeS",
    database: "transportmanagerdb"
});

myConnection.connect().then(() => console.log(`Database connected!`)).catch(err => console.error(`Connection error: ${err.stack}`));

// Example function to show all forwarders from the database
const showAllForwarders = function () {
    myConnection.query('SELECT * FROM t_forwarder', (err, res) => {
    if (err) {  
        console.error(`Query error: ${err.stack}`);
    } else {
        //console.log(`Query result: ${JSON.stringify(res.rows)}`);
        console.log(res.rows);
    }
    myConnection.end().then(() => 
        console.log(`Database connection closed!`)).catch(err => 
            console.error(`Error closing connection: ${err.stack}`));
    });
};

// app.post /postData -- endpoint to receive data from the frontend and insert it into the database
app.post('/postData', (req, res) => {
    const {forwarder_id,fw_name,fw_reg_nr,fw_vat_nr,fw_addess,fw_phone_nr,fw_email} = req.body;

    const insert_query = 'INSERT INTO t_forwarder (forwarder_id,fw_name,fw_reg_nr,fw_vat_nr,fw_addess,fw_phone_nr,fw_email) VALUES ($1, $2, $3, $4, $5, $6, $7)';

    myConnection.query(insert_query, [forwarder_id,fw_name,fw_reg_nr,fw_vat_nr,fw_addess,fw_phone_nr,fw_email], (err, result) => {
        if (err) {
            console.log('Error inserting data: ', err);
            res.send(err);
        } else {
            console.log(result);
            res.send("DATA POSTED SUCCESSFULLY!");
        }
    });
});

// Start the Node.js server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});