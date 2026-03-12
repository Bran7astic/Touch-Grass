import { useState } from "react"
import { useEffect } from "react"
import Card from "../components/Card"

export default function Home() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEvents = async () => {
            const results = await fetch('/events')
            const data = await results.json()

            setEvents(data)
        }
        getEvents()
    }, [])

    useEffect(() => {
        console.log(events)
    }, [events])

    return(
        <div>
            {events && (
                events.map((event) => (
                    <Card props={event}/> 
                ))
            )}
        </div>
    )
}