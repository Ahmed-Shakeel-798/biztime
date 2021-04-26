const db = require("../db");
const express = require("express");

const router = express.Router();

// get all users
router.get("/", async (req, res, next) => {
    try {
        const results = await db.query(
            `SELECT * FROM companies`);
        return res.json(results.rows);
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;