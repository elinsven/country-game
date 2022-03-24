const express = require("express");
const app = express();
const pool = require("./database")

app.use(express.json());

app.get("/getData", async (req, res) => {
    try {
        const allData = await pool.query("SELECT * FROM countries");

        res.json(allData.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
