const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./database");
let port = process.env.PORT || 3000;

app.use(express.json(), cors());

app.get("/getCountries", async (req, res) => {
    try {
        const allCountries = await pool.query("SELECT * FROM countries ORDER BY country");
        res.json(allCountries.rows);
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})