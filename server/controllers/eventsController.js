import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
    try {
        const selectQuery = `SELECT * FROM events ORDER BY id ASC`
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( {error: error.message } )
    }
}

const getEventById = async (req, res) => {
    try {  
        const selectQuery = `
            SELECT name, location, description, date, image, link
            FROM events
            WHERE id=$1
        `

        const eventId = req.params.eventId
        const results = await pool.query(selectQuery, [eventId])
        res.status(200).json(results.rows)

    } catch (error) {
        res.status(409).json( {error: error.message} )
    }
}

export default {
    getEvents,
    getEventById
}