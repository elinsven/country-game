const express = require("express");
const app = express();
const pool = require("./database");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "../dist/country-game")));
if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "../dist/country-game")));
}

app.get("/getData", async (req, res) => {
    try {
        const allData = await pool.query("SELECT * FROM countries");

        res.json(allData.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});
