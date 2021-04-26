const db = require("../db");
const express = require("express");

const router = express.Router();

// get all companies
router.get("/", async (req, res, next) => {
    try {
        const results = await db.query(
            `SELECT * FROM companies`);
        return res.json(results.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "internal server error" });
    }
});

// get companies by code
router.get("/:code", async (req, res, next) => {
    try {
        const result = await db.query(
            `SELECT * FROM companies where code=$1`, [req.params.code]);

        if (result.rows.length != 0) {
            return res.status(200).json(result.rows);
        }
        return res.status(404).send({ error: "No such company" })

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "internal server error" });
    }
})

// create company 
router.post("/", async (req, res, next) => {
    try {
        const { code, name, description } = req.body;
        const result = await db.query(
            `INSERT INTO COMPANIES (code, name, description)
            values ($1, $2, $3)
            RETURNING code, name, description`, [code, name, description]
        );
        res.status(201).send(result.rows[0]);

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "internal server error" });
    }
})


module.exports = router;