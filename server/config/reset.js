import './dotenv.js'
import { pool } from "./database.js"
import eventData from "../data/eventsData.js"

const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            date DATE NOT NULL,
            image TEXT NOT NULL,
            link TEXT NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully!')
    } catch (error) {
        console.error('⚠️ error creating events table: ', error)
    }
}

const seedEventsTable = async () => {
    await createEventsTable()

    eventData.forEach((event) => {
        const insertQuery = `
            INSERT INTO events (name, location, description, date, image, link)
            VALUES ($1, $2, $3, $4, $5, $6)
        `

        const values = [
            event.name,
            event.location,
            event.description,
            event.date,
            event.image,
            event.link
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event: ', err)
                return
            }

            console.log(`✅ ${event.name} added successfully!`)
        })

    })
}

seedEventsTable()